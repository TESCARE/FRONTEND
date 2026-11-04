import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Award, Sparkles, Feather, Wrench, BadgeCheck } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import workerImg from './assets/trusted_expert.png';
import bird1Img from './assets/trusted/bird1.png';
import bird2Img from './assets/trusted/bird2.png';
import bird3Img from './assets/trusted/bird3.png';
import bird4Img from './assets/trusted/bird4.png';
import './TrustedExperts.css';
import navigate from './navigate.js';

const pestFeatures = [
  'Govt. Certified & Background-Verified Specialists',
  'Medical-Grade & Non-Toxic Formulations',
  'Pre & Post Treatment Digital Inspection Reports',
  'Zero Mess, Odourless & Rapid 45-Min Dispatch',
];

const birdFeatures = [
  'Garware 100% High-Density Polyethylene (HDPE)',
  'Virtually Invisible Mesh — Uncompromised Balcony View',
  'Rust-Proof SS 316 Marine Grade Wire Ropes & Anchors',
  '3 to 5 Year Warranty with Free Re-tensioning',
];

const birdGallery = [
  { img: bird1Img, title: 'Balcony Bird Netting', caption: 'High-rise residential protection' },
  { img: bird2Img, title: 'Window Pigeon Netting', caption: 'Durable, weather-resistant mesh' },
  { img: bird3Img, title: 'Duct & Shaft Netting', caption: 'Complete perimeter sealing' },
  { img: bird4Img, title: 'Commercial Bird Spikes', caption: 'Permanent ledge & sign protection' },
];

const CheckList = ({ items }) => (
  <ul className="check-list te__list">
    {items.map((item, i) => (
      <Reveal as="li" key={i} delay={i * 0.06} y={12}>
        <CheckCircle2 size={19} />
        <span>{item}</span>
      </Reveal>
    ))}
  </ul>
);

const TrustedExperts = () => {
  return (
    <section className="section section--dark te">
      <div className="hero-glow hero-glow--a" />
      <div className="hero-glow hero-glow--b" />
      <div className="container">
        {/* Block 1 — Pest Control Experts */}
        <div className="te__block">
          <Reveal className="te__media" y={32}>
            <div className="te__img">
              <img src={workerImg} alt="Tescare certified pest control technician" loading="lazy" />
            </div>
            <motion.div
              className="te__badge"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <strong>10+</strong>
              <span>Years of Clinical Mastery</span>
            </motion.div>
          </Reveal>

          <div className="te__content">
            <Reveal>
              <span className="eyebrow"><ShieldCheck size={14} /> Certified Team</span>
              <h2>Trained Entomologists &amp; <span className="text-gradient">Certified Technicians</span></h2>
              <p>Every TESCARE specialist completes rigorous training in targeted pest biology, safe chemical handling, and precision pest eradication.</p>
            </Reveal>

            <CheckList items={pestFeatures} />

            <Reveal delay={0.25} className="te__action-group">
              <button
                type="button"
                className="btn btn--primary btn--lg"
                onClick={() => navigate('#book')}
              >
                <span>Book Certified Inspection</span>
                <ArrowRight />
              </button>
            </Reveal>
          </div>
        </div>

        <div className="te__divider" aria-hidden="true" />

        {/* Block 2 — Bird Netting Showcase */}
        <div className="te__block te__block--reverse">
          <div className="te__content">
            <Reveal>
              <span className="eyebrow"><Feather size={14} /> Balcony &amp; Window Netting</span>
              <h2>Invisible Commercial-Grade <span className="text-gradient">Bird Protection</span></h2>
              <p>Keep pigeons, crows, and birds away from balconies and AC outdoor units without compromising your view or harming the birds.</p>
            </Reveal>

            <CheckList items={birdFeatures} />

            <Reveal delay={0.25} className="te__action-group">
              <button
                type="button"
                className="btn btn--outline-light btn--lg"
                onClick={() => navigate('#bird-netting')}
              >
                <span>Explore Bird Netting Systems</span>
                <ArrowRight />
              </button>
            </Reveal>
          </div>

          <div className="te__grid">
            {birdGallery.map((item, i) => (
              <Reveal key={i} delay={i * 0.08} className="te__cell" y={20}>
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="te__cell-overlay">
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedExperts;
