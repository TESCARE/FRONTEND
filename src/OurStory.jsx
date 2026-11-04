import React from 'react';
import { CheckCircle2, BookOpen, ShieldCheck, Award, Users, HeartHandshake } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import ourStoryImg from './assets/OS.png';
import './OurStory.css';

const highlights = [
  'Certified entomology & pest science team',
  '100% CIB registered safe chemical formulas',
  'Commercial-grade HDPE UV-resistant bird netting',
  'Transparent digital invoicing & warranty cards',
];

const OurStory = () => (
  <section className="section section--white story">
    <div className="container story__inner">
      {/* Media with floating badge */}
      <Reveal className="story__media" y={32}>
        <div className="story__img-wrap">
          <img src={ourStoryImg} alt="Tescare leadership and technician team" loading="lazy" />
        </div>
        <div className="story__card">
          <div className="story__card-icon"><Award size={22} /></div>
          <div>
            <strong>10,000+ Protected Clients</strong>
            <span>Serving families &amp; commercial towers across India</span>
          </div>
        </div>
      </Reveal>

      {/* Narrative & Highlights */}
      <div className="story__content">
        <Reveal>
          <span className="eyebrow"><BookOpen size={14} /> Our Heritage</span>
          <h2>Built On Science, Clinical Safety &amp; Unshakable Trust</h2>
          <p className="story__p">
            TESCARE was established with a singular mission: to liberate homeowners and property managers from invasive pests using safe, eco-conscious methods rather than hazardous, smelly fumigants.
          </p>
          <p className="story__p">
            Over a decade of hands-on expertise in the field, we have engineered specialized treatment protocols for Indian climate conditions — from moisture-loving subterranean termites to resilient cockroach colonies and balcony bird intrusions.
          </p>
        </Reveal>

        <ul className="story__list">
          {highlights.map((h, i) => (
            <Reveal as="li" key={i} delay={0.1 + i * 0.06} y={10}>
              <CheckCircle2 size={19} />
              <span>{h}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default OurStory;
