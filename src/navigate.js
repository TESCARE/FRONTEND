/**
 * navigate — single entry point for every in-app hash navigation.
 *
 * Setting window.location.hash to the hash you are already on fires no
 * hashchange event and moves nothing, so buttons that point at their own
 * page read as broken. This resolves that case by scrolling to the part of
 * the page the button actually promises (the booking form, the contact
 * form) instead of silently doing nothing.
 */

// Route -> the element a self-targeting button should scroll to.
const ANCHORS = {
  '#book': 'booking-form',
  '#contact': 'contact-form',
};

const scrollToId = (id) => {
  const el = id && document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

export const navigate = (hash) => {
  const target = hash && hash.startsWith('#') ? hash : `#${hash || ''}`;
  const current = window.location.hash || '#';

  if (current === target) {
    scrollToId(ANCHORS[target]);
    return;
  }

  window.location.hash = target;
};

export default navigate;
