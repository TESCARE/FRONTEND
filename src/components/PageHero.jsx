import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './PageHero.css';

/**
 * PageHero — compact dark hero used by About / Book / Contact / Offers.
 * props: eyebrow, icon, title (node), text, image, benefits[], actions (node), align ('center'|'left')
 */
const PageHero = ({ eyebrow, icon: Icon, title, text, image, benefits = [], actions, align = 'center', compact = false }) => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 700], [0, 60]);
  const yText = useTransform(scrollY, [0, 600], [0, -35]);
  const opacityText = useTransform(scrollY, [0, 450], [1, 0.4]);

  return (
    <section className={`hero-dark page-hero ${compact ? 'page-hero--compact' : ''} page-hero--${align}`}>
      {image && (
        <motion.div className="hero-media page-hero__media" style={{ y: yBg }}>
          <img src={image} alt="" className="page-hero__img" fetchpriority="high" />
        </motion.div>
      )}
      <div className="hero-overlay page-hero__overlay" />
      <div className="hero-glow hero-glow--a" />
      <div className="hero-glow hero-glow--b" />
      <div className="container page-hero__container">
        <motion.div className="page-hero__content" style={{ y: yText, opacity: opacityText }}>
          {eyebrow && (
            <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {Icon && <Icon />} {eyebrow}
            </motion.span>
          )}
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
            {title}
          </motion.h1>
          {text && (
            <motion.p className="page-hero__text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              {text}
            </motion.p>
          )}
          {benefits.length > 0 && (
            <motion.ul className="page-hero__benefits" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
              {benefits.map((b, i) => <li key={i}><CheckCircle2 /> {b}</li>)}
            </motion.ul>
          )}
          {actions && (
            <motion.div className="page-hero__actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.32 }}>
              {actions}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
