import React from 'react';
import ProcessCards from './components/ProcessCards.jsx';
import bg1 from './assets/roach_inspection.png';
import bg2 from './assets/roach_gel_bait.png';
import bg3 from './assets/roach_spray.png';
import bg4 from './assets/roach_follow_up.png';

const steps = [
  { number: '1', title: "Inspection", desc: "Identify hiding spots and infestation severity", bg: bg1 },
  { number: '2', title: "Gel Bait Treatment", desc: "Strategic placement of gel baits in active areas", bg: bg2 },
  { number: '3', title: "Spray Treatment", desc: "Residual spray in cracks and crevices", bg: bg3 },
  { number: '4', title: "Follow-up Visit", desc: "Ensure complete elimination and re-treatment if needed", bg: bg4 },
];

const CockroachProcess = () => (
  <ProcessCards eyebrow="Our Process" title="Treatment Process" text="Proven method for cockroach elimination" steps={steps} />
);

export default CockroachProcess;
