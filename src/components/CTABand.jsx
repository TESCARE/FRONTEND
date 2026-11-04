import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, BadgeCheck } from 'lucide-react';
import techImg from '../assets/PCC.png';
import Reveal from './Reveal.jsx';
import './CTABand.css';
import navigate from '../navigate.js';

/**
 * CTABand — shared dark call-to-action band with technician visual.
 * props: title, text, primaryLabel, secondaryLabel
 */
const CTABand = ({
  title = 'Book Your Pest Inspection Today',
  text = 'Get a free on-site assessment and a treatment plan tailored to your property.',
  primaryLabel = 'Schedule Inspection',
  secondaryLabel = 'Talk to an Expert',
}) => {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-band__panel">
          <div className="cta-band__glow cta-band__glow--a" />
          <div className="cta-band__glow cta-band__glow--b" />
          <div className="cta-band__inner">
        <Reveal className="cta-band__content">
          <span className="eyebrow">Free Inspection</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-band__actions">
            <button type="button" className="btn btn--primary btn--lg" onClick={() => navigate('#book')}>
              {primaryLabel} <ArrowRight />
            </button>
            <button type="button" className="btn btn--outline-light btn--lg" onClick={() => navigate('#contact')}>
              <Phone /> {secondaryLabel}
            </button>
          </div>
          <ul className="cta-band__trust">
            <li><BadgeCheck /> Certified technicians</li>
            <li><ShieldCheck /> Safe, eco-friendly chemicals</li>
            <li><Clock /> Same-day service available</li>
          </ul>
        </Reveal>
        <Reveal className="cta-band__media" delay={0.15} y={40}>
          <img src={techImg} alt="Tescare pest control technician" loading="lazy" />
        </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
