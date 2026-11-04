import React from 'react';
import ProcessCards from './components/ProcessCards.jsx';
import bg1 from './assets/bedbug_inspection.png';
import bg2 from './assets/bedbug_plan.png';
import bg3 from './assets/bedbug_chemical.png';
import bg4 from './assets/bedbug_followup.png';

const steps = [
  { number: '1', title: "Inspection", desc: "Thorough examination of mattress, bedding, and furniture", bg: bg1 },
  { number: '2', title: "Treatment Plan", desc: "Customized approach based on infestation severity", bg: bg2 },
  { number: '3', title: "Chemical Treatment", desc: "Safe, effective pesticides applied to affected areas", bg: bg3 },
  { number: '4', title: "Follow-up Visit", desc: "Ensure complete elimination and prevention", bg: bg4 },
];

const BedbugProcess = () => (
  <ProcessCards eyebrow="Our Process" title="Our Treatment Process" text="Systematic approach to eliminate bedbugs completely" steps={steps} />
);

export default BedbugProcess;
