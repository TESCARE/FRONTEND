import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, BadgeCheck, Timer, IndianRupee, ArrowRight, Award, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import whyChooseUsImg from './assets/about/why_choose_us.png';
import workerImg from './assets/about/worker.png';
import './WhyChooseUs.css';
import navigate from './navigate.js';

const points = [
  {
    icon: <Leaf />,
    title: '100% CIB-Approved Eco Formulations',
    desc: 'Odourless, non-staining, and safe for infants, pregnant mothers, and pets.',
  },
  {
    icon: <BadgeCheck />,
    title: 'Certified & Verified Technicians',
    desc: 'Background-checked professionals equipped with digital diagnosis and PPE.',
  },
  {
    icon: <Timer />,
    title: '45-Minute Rapid Emergency Response',
    desc: 'Same-day and next-day inspection slots available 7 days a week.',
  },
  {
    icon: <IndianRupee />,
    title: 'Clear Pricing, Agreed Upfront',
    desc: 'A firm price after the free inspection, itemised before any treatment begins.',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section className="section section--white wcu" ref={ref}>
      <div className="container wcu__inner">
        {/* Media Showcase */}
        <div className="wcu__media">
          <motion.div className="wcu__img" style={{ y: imageY }}>
            <img src={whyChooseUsImg} alt="Tescare clinical pest control service" loading="lazy" />
          </motion.div>
          <motion.div className="wcu__worker" style={{ y: badgeY }}>
            <img src={workerImg} alt="Tescare verified technician" loading="lazy" />
          </motion.div>
          
          <div className="wcu__badge">
            <Award size={32} />
            <div>
              <strong>10+ Years Trust</strong>
              <span>50,000+ Treatments Done</span>
            </div>
          </div>

          <div className="wcu__mini-badge">
            <Sparkles size={16} />
            <span>99.4% Elimination Rate</span>
          </div>
        </div>

        {/* Content */}
        <div className="wcu__content">
          <Reveal>
            <span className="eyebrow"><ShieldAlert size={14} /> The Tescare Standard</span>
            <h2>Scientific Pest Defence You Can Count On</h2>
            <p className="wcu__lead">
              At TESCARE, we combine medical-grade chemistry with precision application techniques. Whether eliminating resilient German cockroaches, termite colonies, or protecting balconies with invisible bird netting, our certified technicians ensure your space stays completely protected.
            </p>
          </Reveal>

          <ul className="wcu__points">
            {points.map((p, i) => (
              <Reveal key={i} as="li" delay={0.08 + i * 0.08} className="wcu__point">
                <span className="icon-box">{p.icon}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.35} className="wcu__cta-row">
            <button
              type="button"
              className="btn btn--primary btn--lg"
              onClick={() => navigate('#about')}
            >
              <span>Learn About Our Heritage</span>
              <ArrowRight />
            </button>
            <button
              type="button"
              className="btn btn--outline btn--lg"
              onClick={() => navigate('#book')}
            >
              Schedule Free Inspection
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
