import React from 'react';
import ProcessCards from './components/ProcessCards.jsx';
import bg1 from './assets/services/termite_pre.png';
import bg2 from './assets/services/termite_post.png';
import bg3 from './assets/services/termite_soil.png';
import bg4 from './assets/services/termite_wood.png';

const steps = [
  { number: '1', title: "Pre-construction Treatment", desc: "Soil treatment before building foundation is laid", bg: bg1 },
  { number: '2', title: "Post-construction Treatment", desc: "Chemical barrier around existing structures", bg: bg2 },
  { number: '3', title: "Soil Treatment", desc: "Anti-termite chemicals injected into soil", bg: bg3 },
  { number: '4', title: "Wood Protection", desc: "Direct treatment and protection of wooden elements", bg: bg4 },
];

const TermiteSolutions = () => (
  <ProcessCards eyebrow="Our Process" title="Termite Treatment Solutions" text="Comprehensive protection for every situation" steps={steps} />
);

export default TermiteSolutions;
