/**
 * leadSubmit — sends an enquiry down two paths from one call.
 *
 *   1. Web3Forms  -> the notification email (tescareservice@gmail.com).
 *   2. Apps Script -> a row in the "TESCARE SERVICES" Google Sheet.
 *
 * The email is the path that must not fail: it is how Tescare learns a
 * lead exists, and it doubles as the durable record. So success is
 * reported on the email alone. If the sheet write fails, the enquiry is
 * NOT lost — the Apps Script sweeps the notification mail into the sheet
 * within five minutes, and this module also retries queued writes on the
 * next page load.
 *
 * Both paths carry the same Enquiry ID, minted here, so the sheet can
 * tell "this is the mail for a row I already have" from "this is a new
 * enquiry" without guessing.
 *
 * No credentials live in this file. The Web3Forms access key is a public
 * client key; the Apps Script URL is a write-only endpoint that cannot
 * read the sheet.
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export const ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || 'f4940e07-4f4b-42b8-aafe-efc508dde653';

export const DESTINATION_EMAIL = 'tescareservice@gmail.com';

/**
 * Apps Script web app URL — see docs/LEADS_SETUP.md step 4.
 * Empty means sheet syncing is off; the email path still works.
 */
const PASTED_SHEET_ENDPOINT = '';
export const SHEET_ENDPOINT =
  import.meta.env.VITE_SHEET_ENDPOINT || PASTED_SHEET_ENDPOINT;

/** Must match SHARED_TOKEN in docs/tescare-leads.gs. */
const SHARED_TOKEN = 'tescare-web-2026';

const QUEUE_KEY = 'tescare_sheet_queue';
const TIMEOUT_MS = 15000;

export const isLeadPipelineConfigured = () =>
  /^[0-9a-f-]{36}$/i.test((ACCESS_KEY || '').trim());

export const isSheetSyncConfigured = () =>
  /^https:\/\/script\.google\.com\//.test((SHEET_ENDPOINT || '').trim());

/** TES-20261105-K3F9 — date-stamped so it sorts and reads naturally. */
export const makeEnquiryId = () => {
  const d = new Date();
  const stamp = [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, '0'),
    String(d.getDate()).padStart(2, '0'),
  ].join('');
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `TES-${stamp}-${rand}`;
};

const istNow = () =>
  new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  });

// ------------------------------------------------------------ sheet path

const readQueue = () => {
  try {
    const raw = localStorage.getItem(QUEUE_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
};

const writeQueue = (list) => {
  try {
    // Cap it: a permanently broken endpoint must not grow without bound.
    localStorage.setItem(QUEUE_KEY, JSON.stringify(list.slice(-20)));
  } catch {
    /* private mode / quota — the Gmail sweep is still the safety net */
  }
};

const postToSheet = async (payload) => {
  if (!isSheetSyncConfigured()) return { ok: false, reason: 'sheet-not-configured' };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(SHEET_ENDPOINT, {
      method: 'POST',
      // text/plain is CORS-safe, so the browser sends no preflight —
      // Apps Script cannot answer an OPTIONS request.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ ...payload, token: SHARED_TOKEN }),
      redirect: 'follow',
      signal: controller.signal,
    });
    const data = await res.json().catch(() => null);
    return data && data.ok
      ? { ok: true, result: data.result }
      : { ok: false, reason: (data && data.error) || `http-${res.status}` };
  } catch (err) {
    return { ok: false, reason: err.name === 'AbortError' ? 'timeout' : 'network' };
  } finally {
    clearTimeout(timer);
  }
};

/**
 * Retries sheet writes that failed earlier. Safe to call on every load:
 * the Apps Script de-duplicates on Enquiry ID, so a row that was in fact
 * written is never doubled.
 */
export const flushSheetQueue = async () => {
  const queue = readQueue();
  if (!queue.length || !isSheetSyncConfigured()) return;

  const stillFailing = [];
  for (const item of queue) {
    const res = await postToSheet(item);
    if (!res.ok) stillFailing.push(item);
  }
  writeQueue(stillFailing);
};

// ------------------------------------------------------------ email path

const LABELS = {
  name: 'Name',
  phone: 'Mobile',
  email: 'Email',
  service: 'Service',
  city: 'City',
  propertyType: 'Property',
  preferredDate: 'Preferred date',
  timeSlot: 'Time slot',
  message: 'Message',
};

const postToEmail = async (formName, fields, enquiryId, pageUrl, receivedAt) => {
  const ordered = {};
  for (const key of Object.keys(LABELS)) {
    if (fields[key]) ordered[LABELS[key]] = fields[key];
  }

  const payload = {
    access_key: ACCESS_KEY,
    subject: `New ${formName} enquiry — ${fields.name || 'Website'}${fields.phone ? ` (${fields.phone})` : ''}`,
    from_name: 'Tescare Website',
    replyto: fields.email || undefined,
    botcheck: '',
    // Read back by the Apps Script Gmail sweep to match mail to row.
    'Enquiry ID': enquiryId,
    Form: formName,
    ...ordered,
    'Submitted from': pageUrl,
    Received: receivedAt,
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const data = await res.json().catch(() => null);
    if (res.ok && data && data.success) return { ok: true };
    return { ok: false, reason: (data && data.message) || `http-${res.status}` };
  } catch (err) {
    return { ok: false, reason: err.name === 'AbortError' ? 'timeout' : 'network' };
  } finally {
    clearTimeout(timer);
  }
};

// ----------------------------------------------------------------- entry

/**
 * @param {string} formName  'Booking' | 'Contact'
 * @param {object} fields    name, phone, email, service, message, …
 * @returns {Promise<{ok: boolean, enquiryId?: string, sheet?: boolean, reason?: string}>}
 */
export const submitLead = async (formName, fields) => {
  if (!isLeadPipelineConfigured()) {
    return { ok: false, reason: 'not-configured' };
  }

  const enquiryId = makeEnquiryId();
  const pageUrl = window.location.href;
  const receivedAt = istNow();

  const sheetPayload = {
    enquiryId,
    ...fields,
    pageUrl,
    receivedAt,
    status: 'New',
    channel: 'Website',
    form: formName,
  };

  // Run both paths together; neither should wait on the other.
  const [emailRes, sheetRes] = await Promise.all([
    postToEmail(formName, fields, enquiryId, pageUrl, receivedAt),
    postToSheet(sheetPayload),
  ]);

  // A sheet failure is recoverable (retry queue + the Gmail sweep), so it
  // never turns a delivered enquiry into an error for the customer.
  if (!sheetRes.ok && sheetRes.reason !== 'sheet-not-configured') {
    writeQueue([...readQueue(), sheetPayload]);
  }

  if (!emailRes.ok) return { ok: false, reason: emailRes.reason, enquiryId };
  return { ok: true, enquiryId, sheet: sheetRes.ok };
};

export default submitLead;
