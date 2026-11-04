import React from 'react';
import ProcessCards from './components/ProcessCards.jsx';
import bg1 from './assets/mosq_inspection.png';
import bg2 from './assets/mosq_breeding.png';
import bg3 from './assets/mosq_chemical.png';
import bg4 from './assets/mosq_prevention.png';

const steps = [
  { number: '1', title: "Inspection", desc: "Identify mosquito breeding sites around your property", bg: bg1 },
  { number: '2', title: "Breeding Control", desc: "Eliminate standing water and breeding grounds", bg: bg2 },
  { number: '3', title: "Chemical Treatment", desc: "Apply safe larvicides and adulticides", bg: bg3 },
  { number: '4', title: "Prevention", desc: "Ongoing monitoring and prevention strategies", bg: bg4 },
];

const MosquitoProcess = () => (
  <ProcessCards eyebrow="Our Process" title="Treatment Process" text="Proven method for mosquito elimination" steps={steps} />
);

export default MosquitoProcess;
