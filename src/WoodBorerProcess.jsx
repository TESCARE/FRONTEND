import React from 'react';
import ProcessCards from './components/ProcessCards.jsx';
import bg1 from './assets/wb_inspection.png';
import bg2 from './assets/wb_assessment.png';
import bg3 from './assets/wb_chemical.png';
import bg4 from './assets/wb_prevention.png';

const steps = [
  { number: '1', title: "Inspection", desc: "Detailed inspection of furniture, doors, and wooden structures.", bg: bg1 },
  { number: '2', title: "Damage Assessment", desc: "Identify infestation areas and severity of damage.", bg: bg2 },
  { number: '3', title: "Chemical Treatment", desc: "Specialized wood borer treatment applied to affected areas.", bg: bg3 },
  { number: '4', title: "Protection & Prevention", desc: "Protective coating and monitoring to prevent reinfestation.", bg: bg4 },
];

const WoodBorerProcess = () => (
  <ProcessCards eyebrow="Our Process" title="Our Treatment Process" text="Professional process to eliminate wood borers and protect wooden surfaces." steps={steps} />
);

export default WoodBorerProcess;
