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

/** "+91 90033 28229" -> "9003328229"; returns '' when not a valid number. */
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

// ---------------------------------------------------------------- dates

/**
 * Dates and slots are anchored to Chennai, not to the visitor's own
 * clock: the appointment windows are Tescare's working hours, so someone
 * booking from another timezone must not be offered a morning slot that
 * has already passed in Chennai.
 *
 * Also note this is NOT toISOString().split('T')[0] — that is UTC, so
 * between midnight and 05:30 IST it returns yesterday and the form would
 * accept a date that has already gone.
 */
const IST = 'Asia/Kolkata';

// en-CA formats as yyyy-mm-dd, which is exactly what <input type="date">
// expects.
const istDateFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: IST, year: 'numeric', month: '2-digit', day: '2-digit',
});

const istDate = (d = new Date()) => istDateFormatter.format(d);

/** Current hour (0-23) in Chennai. */
export const istHour = () => {
  const h = new Intl.DateTimeFormat('en-GB', {
    timeZone: IST, hour: '2-digit', hour12: false,
  }).format(new Date());
  return parseInt(h, 10);
};

export const todayLocal = () => istDate();

/** How far ahead a visit can be booked. */
export const MAX_BOOKING_DAYS = 90;

export const maxBookingDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + MAX_BOOKING_DAYS);
  return istDate(d);
};

export const isToday = (value) => value === todayLocal();

/**
 * Time slots, with the hour each one stops being bookable. A slot is
 * closed once its window has started — booking "Morning" at 2pm is not a
 * real appointment.
 */
export const TIME_SLOTS = [
  { value: 'morning', label: 'Morning (9:00 AM - 12:00 PM)', startHour: 9 },
  { value: 'afternoon', label: 'Afternoon (12:00 PM - 4:00 PM)', startHour: 12 },
  { value: 'evening', label: 'Evening (4:00 PM - 7:30 PM)', startHour: 16 },
  // No fixed start: "earliest available" is open for as long as any real
  // slot is still open, so it must not close at 9am with the morning.
  { value: 'anytime', label: 'Anytime / Earliest Available', startHour: null },
];

/** Slots still open on the given date. All of them for a future date. */
export const availableSlots = (dateValue) => {
  if (!dateValue || !isToday(dateValue)) return TIME_SLOTS;
  const hour = istHour();
  const timed = TIME_SLOTS.filter((s) => s.startHour !== null && hour < s.startHour);
  if (!timed.length) return [];
  return TIME_SLOTS.filter((s) => s.startHour === null || hour < s.startHour);
};

/**
 * Earliest date that can still be booked: today while a slot remains,
 * otherwise tomorrow. Without this the picker keeps offering today after
 * the last slot has started, which is a dead end — every slot disabled
 * and nothing selectable.
 */
export const earliestBookingDate = () => {
  const today = todayLocal();
  if (availableSlots(today).length) return today;
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return istDate(d);
};

export const validateDate = (value) => {
  const v = (value || '').trim();
  if (!v) return 'Please choose a preferred date.';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return 'Please choose a valid date.';
  const earliest = earliestBookingDate();
  if (v < todayLocal()) return 'That date has passed — please choose today or later.';
  if (v < earliest) return "Today's slots have all started — please choose tomorrow or later.";
  if (v > maxBookingDate()) return `Please choose a date within the next ${MAX_BOOKING_DAYS} days.`;
  return '';
};

export const validateTimeSlot = (slot, dateValue) => {
  if (!slot) return 'Please choose a time slot.';
  const open = availableSlots(dateValue);
  if (!open.some((s) => s.value === slot)) {
    return open.length
      ? 'That slot has already started today — please pick a later one.'
      : 'No slots left today — please choose tomorrow or later.';
  }
  return '';
};
