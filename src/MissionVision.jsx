import React from 'react';
import { Target, Eye, Compass, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import SectionHead from './components/SectionHead.jsx';
import techImg from './assets/PCC.png';
import './MissionVision.css';

const MissionVision = () => (
  <section className="section section--dark mv">
    <div className="hero-glow hero-glow--a" />
    <div className="hero-glow hero-glow--b" />
    <div className="container">
      <SectionHead
        eyebrow="Core Philosophy"
        icon={Compass}
        center={true}
        title="Driven By Safety, Science &amp; Integrity"
        text="What guides every home inspection, chemical formulation, and warranty support service we deliver."
      />
      <div className="mv__grid">
        <Reveal className="mv__card">
          <span className="icon-box icon-box--dark"><Target /></span>
          <h3>Our Mission</h3>
          <p>
            To deliver medical-grade, non-hazardous pest control and bird netting services that safeguard residential families and commercial spaces, ensuring healthy living with zero environmental harm.
          </p>
          <div className="mv__card-pill">
            <ShieldCheck size={14} /> Zero Harm Chemistry
          </div>
        </Reveal>

        <Reveal className="mv__media" delay={0.1} y={40}>
          <img src={techImg} alt="Tescare certified specialist technician" loading="lazy" />
        </Reveal>

        <Reveal className="mv__card" delay={0.2}>
          <span className="icon-box icon-box--dark"><Eye /></span>
          <h3>Our Vision</h3>
          <p>
            To stand as India's most trusted pest defence ecosystem — renowned for uncompromised technician training, digitized client portals, transparent pricing, and 100% elimination guarantees.
          </p>
          <div className="mv__card-pill">
            <Sparkles size={14} /> Technology-First Execution
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default MissionVision;
