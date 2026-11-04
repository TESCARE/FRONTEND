import React from 'react';
import Reveal from './Reveal.jsx';

const SectionHead = ({ eyebrow, title, text, center = true, icon: Icon, children }) => (
  <Reveal className={`section-head ${center ? 'section-head--center' : ''}`}>
    {eyebrow && (
      <span className="eyebrow">
        {Icon && <Icon />}
        {eyebrow}
      </span>
    )}
    {title && <h2>{title}</h2>}
    {text && <p>{text}</p>}
    {children}
  </Reveal>
);

export default SectionHead;
