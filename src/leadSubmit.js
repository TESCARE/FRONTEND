/**
 * leadSubmit — sends an enquiry from any Tescare form to the inbox.
 *
 * Delivery runs through Web3Forms. The access key below is the public
 * client key (Web3Forms keys are designed to sit in frontend code); the
 * destination address is fixed on the Web3Forms account that owns the
 * key, so the address cannot be changed by tampering with this file.
 *
 * Destination: tescareservice@gmail.com
 *
 * submitLead resolves { ok: true } ONLY when Web3Forms confirms it
 * accepted the submission. Every other outcome resolves ok: false, so a
 * form never tells a customer their enquiry went through when it did
 * not — see the error toast in BookForm / ContactForm.
 */

const ENDPOINT = 'https://api.web3forms.com/submit';

export const ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || 'f4940e07-4f4b-42b8-aafe-efc508dde653';

export const DESTINATION_EMAIL = 'tescareservice@gmail.com';

export const isLeadPipelineConfigured = () =>
  /^[0-9a-f-]{36}$/i.test((ACCESS_KEY || '').trim());

/** Human-readable labels, so the email body reads as prose not as keys. */
const LABELS = {
  name: 'Name',
  phone: 'Mobile',
  email: 'Email',
  city: 'City',
  service: 'Service',
  propertyType: 'Property',
  preferredDate: 'Preferred date',
  timeSlot: 'Time slot',
  message: 'Message',
  pageUrl: 'Submitted from',
};

/**
 * @param {string} formName  'Booking' | 'Contact'
 * @param {object} fields    Flat key/value map of the submitted fields
 * @returns {Promise<{ok: boolean, reason?: string}>}
 */
export const submitLead = async (formName, fields) => {
  if (!isLeadPipelineConfigured()) {
    return { ok: false, reason: 'not-configured' };
  }

  const ordered = {};
  for (const key of Object.keys(LABELS)) {
    if (fields[key]) ordered[LABELS[key]] = fields[key];
  }

  const payload = {
    access_key: ACCESS_KEY,
    subject: `New ${formName} enquiry — ${fields.name || 'Website'}${fields.phone ? ` (${fields.phone})` : ''}`,
    from_name: 'Tescare Website',
    // Replying to the notification mails the customer directly.
    replyto: fields.email || undefined,
    botcheck: '',
    'Form': formName,
    ...ordered,
    'Submitted from': window.location.href,
    'Received': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    let data = null;
    try {
      data = await res.json();
    } catch {
      return { ok: false, reason: 'bad-response' };
    }

    if (res.ok && data && data.success) return { ok: true };
    return { ok: false, reason: (data && data.message) || `http-${res.status}` };
  } catch (err) {
    return { ok: false, reason: err.name === 'AbortError' ? 'timeout' : 'network' };
  } finally {
    clearTimeout(timeout);
  }
};

export default submitLead;
