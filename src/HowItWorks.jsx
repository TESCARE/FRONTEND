import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Calendar, Search, Wrench, ShieldCheck, Workflow, CheckCircle2 } from 'lucide-react';
import SectionHead from './components/SectionHead.jsx';
import Reveal from './components/Reveal.jsx';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    icon: <Calendar />,
    title: 'Book Inspection',
    desc: 'Reserve a zero-cost on-site assessment online or via WhatsApp at your convenience.',
    highlight: 'Takes < 60 seconds',
  },
  {
    number: '02',
    icon: <Search />,
    title: '45-Pt Diagnosis',
    desc: 'Our certified entomology specialist inspects nesting spots and identifies pest entry routes.',
    highlight: 'Digital Inspection Report',
  },
  {
    number: '03',
    icon: <Wrench />,
    title: 'Targeted Eco-Treatment',
    desc: 'Precision application using safe, odourless CIB-registered formulas or invisible bird mesh.',
    highlight: '100% Kid & Pet Safe',
  },
  {
    number: '04',
    icon: <ShieldCheck />,
    title: 'Guaranteed Protection',
    desc: 'Receive your official digital warranty card. Enjoy scheduled follow-up visits with zero hassle.',
    highlight: 'Free Re-treatment Warranty',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const progress = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), { stiffness: 90, damping: 24 });

  return (
    <section className="section section--soft hiw" ref={ref}>
      <div className="container">
        <SectionHead
          eyebrow="Precision Process"
          icon={Workflow}
          center={true}
          title="From Infestation To Complete Peace Of Mind"
          text="A transparent 4-stage scientific framework designed for long-lasting pest prevention."
        />

        <div className="hiw__track" aria-hidden="true">
          <div className="hiw__line" />
          <motion.div className="hiw__line-fill" style={{ scaleX: progress }} />
        </div>

        <div className="hiw__grid">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.1} className="hiw__step">
              <div className="hiw__marker">
                <span className="hiw__num">{s.number}</span>
              </div>
              <div className="card card--hover hiw__card">
                <div className="hiw__card-top">
                  <span className="icon-box">{s.icon}</span>
                  <span className="hiw__highlight"><CheckCircle2 size={13} /> {s.highlight}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
