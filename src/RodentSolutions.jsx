import React from 'react';
import ProcessCards from './components/ProcessCards.jsx';
import bg1 from './assets/rodent_inspection.png';
import bg2 from './assets/rodent_trap.png';
import bg3 from './assets/rodent_baiting.png';
import bg4 from './assets/rodent_prevention.png';

const steps = [
  { number: '1', title: "Rodent Inspection", desc: "Complete property survey to identify entry points and nesting areas", bg: bg1 },
  { number: '2', title: "Trap Installation", desc: "Strategic placement of humane and effective rodent traps", bg: bg2 },
  { number: '3', title: "Rodent Baiting", desc: "Safe bait stations in targeted locations", bg: bg3 },
  { number: '4', title: "Prevention Methods", desc: "Sealing entry points and ongoing monitoring", bg: bg4 },
];

const RodentSolutions = () => (
  <ProcessCards eyebrow="Our Process" title="Our Rodent Control Solutions" text="Comprehensive approach to rodent elimination" steps={steps} />
);

export default RodentSolutions;
