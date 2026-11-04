import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import ServiceBookingCard from '../ServiceBookingCard.jsx';
import './Service.css';

/**
 * ServiceHero — shared hero for all service pages.
 * props: eyebrow, title, subtitle, benefits[], image, defaultPest
 */
const ServiceHero = ({ eyebrow = 'Pest Control Service', title, subtitle, benefits = [], image, defaultPest }) => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 160]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.1]);
  const yText = useTransform(scrollY, [0, 700], [0, -60]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0.4]);

  return (
    <section className="hero-dark svc-hero">
      <motion.div className="hero-media" style={{ y: yBg, scale: scaleBg }}>
        <img src={image} alt="" className="svc-hero__img" fetchpriority="high" />
      </motion.div>
      <div className="hero-overlay" />
      <div className="hero-glow hero-glow--a" />
      <div className="hero-glow hero-glow--b" />

      <div className="container svc-hero__inner hero-pad">
        <motion.div className="svc-hero__content" style={{ y: yText, opacity: opacityText }}>
          <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <ShieldCheck /> {eyebrow}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
            {title}
          </motion.h1>
          <motion.p className="svc-hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            {subtitle}
          </motion.p>
          <motion.ul className="check-list svc-hero__benefits" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
            {benefits.map((b, i) => (
              <li key={i}><CheckCircle2 /> {b}</li>
            ))}
          </motion.ul>
          <motion.div className="svc-hero__rating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}>
            <div className="svc-hero__stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} />)}</div>
            <span><strong>4.9/5</strong> rated by 10,000+ happy customers</span>
          </motion.div>
        </motion.div>

        <motion.div className="svc-hero__card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
          <ServiceBookingCard defaultPest={defaultPest} />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
