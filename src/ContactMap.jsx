import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import SectionHead from './components/SectionHead.jsx';
import { OFFICE_ADDRESS, OFFICE_MAPS_EMBED, OFFICE_MAPS_URL } from './siteConfig.js';
import './ContactMap.css';

const ContactMap = () => (
  <section className="section section--white cmap">
    <div className="container">
      <SectionHead
        eyebrow="Location"
        icon={MapPin}
        title="Find Us Here"
        text={`Our office at ${OFFICE_ADDRESS}.`}
      />
      <Reveal className="cmap__frame" y={30}>
        <iframe
          src={OFFICE_MAPS_EMBED}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Tescare office — ${OFFICE_ADDRESS}`}
        />
      </Reveal>
      <div className="cmap__actions">
        <a
          className="btn btn--outline btn--sq"
          href={OFFICE_MAPS_URL}
          target="_blank"
          rel="noreferrer"
        >
          <MapPin /> Open in Google Maps <ExternalLink />
        </a>
      </div>
    </div>
  </section>
);

export default ContactMap;
