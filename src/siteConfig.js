/**
 * Single source of truth for Tescare's contact details and map links.
 * Update them here and the footer, contact tiles and embedded map all
 * follow, so they can never drift apart.
 */

export const OFFICE_ADDRESS_LINES = [
  'No. 37/19, 15th Street',
  'Malligaipoo Nagar, Chennai',
  'Tamil Nadu 600083',
];

export const OFFICE_ADDRESS = OFFICE_ADDRESS_LINES.join(', ');

const query = encodeURIComponent(OFFICE_ADDRESS);

/** Opens the address in the Google Maps app or site (official Maps URL API). */
export const OFFICE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${query}`;

/** Same address as an embeddable iframe source, zoomed to street level. */
export const OFFICE_MAPS_EMBED = `https://maps.google.com/maps?q=${query}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

export const CONTACT_EMAIL = 'tescareservice@gmail.com';

/** Social profiles. Tracking query strings are stripped. */
export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/share/1dYrCdzNg5/' },
  { name: 'Instagram', url: 'https://www.instagram.com/tescareservices' },
  { name: 'YouTube', url: 'https://www.youtube.com/@Tescare_services' },
];
