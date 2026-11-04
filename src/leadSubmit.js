/**
 * leadSubmit — sends an enquiry to the Tescare lead pipeline.
 *
 * The endpoint is a Google Apps Script web app bound to the Tescare
 * "Leads" spreadsheet. On each POST it appends a row AND emails the
 * enquiry to CONTACT_EMAIL, so a lead is never held in only one place.
 *
 * Setup lives in docs/LEADS_SETUP.md. Until LEADS_ENDPOINT is filled in,
 * submitLead() resolves with { ok: false, reason: 'not-configured' } and
 * the forms show their "call us instead" fallback rather than a false
 * success message.
 */

// Paste the Apps Script web app URL between the quotes (docs/LEADS_SETUP.md
// step 5). Setting VITE_LEADS_ENDPOINT in .env overrides it, which is the
// tidier option for the live build.
const PASTED_ENDPOINT = '';

export const LEADS_ENDPOINT = import.meta.env.VITE_LEADS_ENDPOINT || PASTED_ENDPOINT;

export const isLeadPipelineConfigured = () => /^https:\/\/\S+$/.test(LEADS_ENDPOINT.trim());

/**
 * @param {string} formName  Which form this came from, e.g. 'Booking' or 'Contact'
 * @param {object} fields    Flat key/value map of the submitted fields
 * @returns {Promise<{ok: boolean, reason?: string}>}
 */
export const submitLead = async (formName, fields) => {
  if (!isLeadPipelineConfigured()) {
    return { ok: false, reason: 'not-configured' };
  }

  const payload = {
    form: formName,
    submittedAt: new Date().toISOString(),
    pageUrl: window.location.href,
    ...fields,
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(LEADS_ENDPOINT, {
      method: 'POST',
      // text/plain is a CORS-safe content type, so the browser sends no
      // preflight — Apps Script cannot answer an OPTIONS request.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      redirect: 'follow',
      signal: controller.signal,
    });

    if (!res.ok) return { ok: false, reason: `http-${res.status}` };

    const text = await res.text();
    try {
      const data = JSON.parse(text);
      return data && data.ok ? { ok: true } : { ok: false, reason: (data && data.error) || 'rejected' };
    } catch {
      // Endpoint answered but not with JSON — treat as a failure rather
      // than telling the customer their enquiry went through.
      return { ok: false, reason: 'bad-response' };
    }
  } catch (err) {
    return { ok: false, reason: err.name === 'AbortError' ? 'timeout' : 'network' };
  } finally {
    clearTimeout(timeout);
  }
};

export default submitLead;
