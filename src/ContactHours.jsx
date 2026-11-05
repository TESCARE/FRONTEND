import React from 'react';
import { Clock, Phone, Mail, MapPin, Zap, ShieldCheck } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import { OFFICE_ADDRESS_LINES, OFFICE_MAPS_URL, CONTACT_EMAIL } from './siteConfig.js';
import './ContactHours.css';

const hours = [
  { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM', status: 'Regular Operations' },
  { day: 'Saturday', time: '8:30 AM - 7:00 PM', status: 'Weekend Slots' },
  { day: 'Sunday', time: '9:00 AM - 5:00 PM', status: 'Scheduled Visits' },
  { day: 'Emergency Infestation Desk', time: '24/7 Available', highlight: true, status: 'Active Hotline' },
];

const ContactHours = () => (
  <section className="section section--soft chours">
    <div className="container chours__inner">
      {/* Hours Card */}
      <Reveal className="card card--pad chours__card">
        <div className="chours__head">
          <span className="icon-box"><Clock /></span>
          <div>
            <h3>Operating &amp; Dispatch Hours</h3>
            <p>Our fleet is stationed across Chennai and metro service zones</p>
          </div>
        </div>
        <ul className="chours__list">
          {hours.map((h, i) => (
            <li key={i} className={h.highlight ? 'is-highlight' : ''}>
              <div className="chours__day-col">
                <strong>{h.highlight && <Zap size={15} />} {h.day}</strong>
                <span>{h.status}</span>
              </div>
              <strong className="chours__time">{h.time}</strong>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 3 Quick Channels */}
      <div className="chours__grid">
        <Reveal className="card card--hover chours__tile" delay={0.05}>
          <span className="icon-box"><Phone /></span>
          <h3>Direct Call Lines</h3>
          <a href="tel:+919003328229">+91 90033 28229</a>
          <a href="tel:+919150044725">+91 91500 44725</a>
          <p>Customer support &amp; booking</p>
        </Reveal>
        <Reveal className="card card--hover chours__tile" delay={0.1}>
          <span className="icon-box"><Mail /></span>
          <h3>Email Desk</h3>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <p>Commercial RFP &amp; billing inquiries</p>
        </Reveal>
        <Reveal className="card card--hover chours__tile" delay={0.15}>
          <span className="icon-box"><MapPin /></span>
          <h3>Central Office</h3>
          <a href={OFFICE_MAPS_URL} target="_blank" rel="noreferrer">
            {OFFICE_ADDRESS_LINES[0]}
          </a>
          <p>
            {OFFICE_ADDRESS_LINES.slice(1).join(', ')}
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default ContactHours;
