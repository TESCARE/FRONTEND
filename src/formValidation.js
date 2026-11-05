/**
 * formValidation — shared rules for the Tescare enquiry forms.
 *
 * Name, mobile and email are mandatory everywhere a lead is captured: a
 * row in the leads sheet is useless without a way to call the person
 * back. The browser's own `required` + type="email"/"tel" checks are too
 * loose for that — type="tel" happily accepts "123" — so the forms turn
 * native validation off and use these rules instead, which also lets the
 * messages be worded and styled consistently.
 */

// Indian mobile: 10 digits beginning 6-9, with an optional +91 / 91 / 0
// prefix. Separators are stripped before testing.
const MOBILE_RE = /^(?:\+?91|0)?([6-9]\d{9})$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const NAME_RE = /^[\p{L}][\p{L}\s.'-]*$/u;

export const stripPhone = (value) => (value || '').replace(/[\s()\-.]/g, '');

/** "+91 87545 74229" -> "8754574229"; returns '' when not a valid number. */
export const normaliseMobile = (value) => {
  const m = stripPhone(value).match(MOBILE_RE);
  return m ? m[1] : '';
};

export const validateName = (value) => {
  const v = (value || '').trim();
  if (!v) return 'Please enter your name.';
  if (v.length < 2) return 'Please enter your full name.';
  if (v.length > 60) return 'Name is too long.';
  if (/\d/.test(v)) return "Name shouldn't contain numbers.";
  if (!NAME_RE.test(v)) return 'Please use letters only.';
  return '';
};

export const validateMobile = (value) => {
  const raw = stripPhone(value);
  if (!raw) return 'Please enter your mobile number.';
  if (/[^\d+]/.test(raw)) return 'Please enter digits only.';

  // Decide validity FIRST. Working out a digit count up front used to strip
  // a leading "91" from numbers that merely start with those digits —
  // 9150044725 became 50044725 — so valid numbers were rejected.
  if (MOBILE_RE.test(raw)) return '';

  // Only now, for the error message, work out what is wrong. A 91/0 prefix
  // is only a prefix when something is left over after removing it.
  const bare = raw.replace(/^\+/, '');
  const digits = bare.length > 10 ? bare.replace(/^(?:91|0)/, '') : bare;
  if (digits.length < 10) return 'Mobile number must be 10 digits.';
  if (digits.length > 10) return "That's more than 10 digits.";
  return 'Enter a valid Indian mobile starting 6, 7, 8 or 9.';
};

export const validateEmail = (value) => {
  const v = (value || '').trim();
  if (!v) return 'Please enter your email address.';
  if (!EMAIL_RE.test(v)) return 'Please enter a valid email address.';
  if (v.length > 120) return 'Email address is too long.';
  return '';
};

/** Optional field — only checked when something was typed. */
export const validateOptional = () => '';

/**
 * Run a map of { fieldName: validatorFn } over the form values.
 * @returns {{ errors: Record<string,string>, firstInvalid: string|null }}
 */
export const runValidation = (values, rules) => {
  const errors = {};
  let firstInvalid = null;
  for (const [field, rule] of Object.entries(rules)) {
    const msg = rule(values[field]);
    if (msg) {
      errors[field] = msg;
      if (!firstInvalid) firstInvalid = field;
    }
  }
  return { errors, firstInvalid };
};

export const focusField = (name) => {
  const el = document.getElementById(name);
  if (!el) return;
  el.focus({ preventScroll: true });
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
