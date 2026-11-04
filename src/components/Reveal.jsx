import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reveal — subtle, performant scroll-in animation wrapper.
 * Usage: <Reveal delay={0.1}>...</Reveal>
 */
const Reveal = ({ children, delay = 0, y = 24, className, as = 'div', once = true, ...rest }) => {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
