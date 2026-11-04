import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import logoWhite from './assets/logo-white.png';
import {
  OFFICE_ADDRESS_LINES,
  OFFICE_MAPS_URL,
  CONTACT_EMAIL,
  SOCIAL_LINKS,
} from './siteConfig.js';

const SOCIAL_ICONS = { Facebook, Instagram, YouTube: Youtube };
import './Footer.css';
import navigate from './navigate.js';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Tescare' },
  { href: '#contact', label: 'Contact Us' },
  { href: '#book', label: 'Book Inspection' },
];

const serviceLinks = [
  { href: '#bird-netting', label: 'Bird Netting Services' },
  { href: '#termite-control', label: 'Termite Control (Anti-Termite)' },
  { href: '#cockroach-control', label: 'Cockroach Control' },
  { href: '#bedbug-control', label: 'Bedbug Eradication' },
  { href: '#mosquito-control', label: 'Mosquito Misting' },
  { href: '#rodent-control', label: 'Rodent & Rat Control' },
  { href: '#woodborer-control', label: 'Wood Borer Protection' },
];

const Footer = ({ cta = true }) => {
  return (
    <footer className="footer">
      <div className="container">
        {cta && (
          <div className="footer__cta">
            <div className="footer__cta-content">
              <span className="footer__cta-badge">
                <ShieldCheck size={14} /> Zero-Risk Guarantee
              </span>
              <h3>Ready For A 100% Pest-Free Environment?</h3>
              <p>Schedule your free on-site assessment today. Our certified technicians provide a digital diagnosis and clear customized plan.</p>
            </div>
            <div className="footer__cta-actions">
              <button
                type="button"
                className="btn btn--primary btn--lg"
                onClick={() => navigate('#book')}
              >
                <span>Book Free Inspection</span>
                <ArrowRight />
              </button>
              <a
                href="tel:+918754574229"
                className="btn btn--outline-light btn--lg"
              >
                <Phone size={17} />
                <span>+91 87545 74229</span>
              </a>
            </div>
          </div>
        )}

        <div className="footer__grid">
          {/* Brand Info */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo-wrap">
              <img src={logoWhite} alt="Tescare Pest Control & Bird Netting" className="footer__logo" />
            </a>
            <p>
              Pest control experts for homes and businesses across Chennai —
              termite, cockroach, rodent, mosquito and bed bug control, plus
              bird netting. Safe, effective and affordable.
            </p>
            <div className="footer__socials">
              {SOCIAL_LINKS.map(({ name, url }) => {
                const Icon = SOCIAL_ICONS[name];
                return (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer__col footer__contact">
            <h4>Emergency &amp; Support</h4>
            <a href="tel:+918754574229" className="footer__ci">
              <Phone />
              <div>
                <strong>+91 87545 74229</strong>
                <span>Also on +91 91500 44725</span>
              </div>
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="footer__ci">
              <Mail />
              <div>
                <strong>{CONTACT_EMAIL}</strong>
                <span>Responses within 2 business hours</span>
              </div>
            </a>
            <a
              className="footer__ci"
              href={OFFICE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin />
              <div>
                <strong>Chennai Office</strong>
                <span>
                  {OFFICE_ADDRESS_LINES.map((line) => (
                    <React.Fragment key={line}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} TESCARE Pest Control &amp; Bird Netting Solutions. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="footer__dot">•</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
