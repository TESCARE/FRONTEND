import React from 'react';
import { ClipboardCheck, Ruler, Wrench, ShieldCheck } from 'lucide-react';
import ProcessCards from './components/ProcessCards.jsx';

const steps = [
  { number: '1', title: 'Site Inspection', desc: 'Assessment of the area', icon: <ClipboardCheck /> },
  { number: '2', title: 'Measurement', desc: 'Precise dimensions taken', icon: <Ruler /> },
  { number: '3', title: 'Net Installation', desc: 'Professional fitting', icon: <Wrench /> },
  { number: '4', title: 'Safety Check', desc: 'Quality assurance', icon: <ShieldCheck /> },
];

const BirdProcess = () => (
  <ProcessCards eyebrow="Installation" title="Installation Process" text="Our professional 4-step installation ensures perfect protection" steps={steps} soft={false} />
);

export default BirdProcess;
