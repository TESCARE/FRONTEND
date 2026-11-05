import React from 'react';
import Reveal from './Reveal.jsx';
import PageLayout from './PageLayout.jsx';
import PageHero from './PageHero.jsx';
import {
  CONTACT_EMAIL,
  OFFICE_ADDRESS_LINES,
  OFFICE_MAPS_URL,
} from '../siteConfig.js';
import './Legal.css';

/**
 * LegalLayout — shared shell for the Privacy Policy and Terms pages so both
 * read identically. `sections` is [{ heading, body }] where body is JSX.
 */
const LegalLayout = ({
  eyebrow,
  icon,
  title,
  text,
  updated,
  intro,
  sections = [],
  closing,
}) => (
  <PageLayout footerCta={false} className="legal-page">
    <PageHero eyebrow={eyebrow} icon={icon} title={title} text={text} compact />

    <section className="section section--white legal">
      <div className="container container--narrow">
        <div className="legal__meta">
          <span>
            Last updated: <strong>{updated}</strong>
          </span>
          <span>
            Applies to <strong>tescareservices.com</strong> and Tescare services
          </span>
        </div>

        {intro && <p className="legal__intro">{intro}</p>}

        {sections.map((s, i) => (
          <Reveal key={s.heading} delay={Math.min(i, 6) * 0.04} y={16} className="legal__section">
            <h2>
              <span className="legal__num">{String(i + 1).padStart(2, '0')}</span>
              {s.heading}
            </h2>
            {s.body}
          </Reveal>
        ))}

        {closing}

        <div className="legal__contact">
          <div className="legal__contact-item">
            <span>Email</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          <div className="legal__contact-item">
            <span>Phone</span>
            <a href="tel:+919003328229">+91 90033 28229</a>
          </div>
          <div className="legal__contact-item">
            <span>Office</span>
            <a href={OFFICE_MAPS_URL} target="_blank" rel="noreferrer">
              {OFFICE_ADDRESS_LINES.join(', ')}
            </a>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default LegalLayout;
