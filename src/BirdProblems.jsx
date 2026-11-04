import React from 'react';
import { Feather, Home, Volume2, ShieldAlert } from 'lucide-react';
import InfoGrid from './components/InfoGrid.jsx';

const items = [
  { title: 'Pigeon Droppings', desc: 'Unsightly and unhygienic mess on balconies', icon: Feather },
  { title: 'Balcony Damage', desc: 'Nesting materials clog drains and vents', icon: Home },
  { title: 'Noise Disturbance', desc: 'Constant cooing and flapping sounds', icon: Volume2 },
  { title: 'Health Risks', desc: 'Diseases spread through bird droppings', icon: ShieldAlert },
];

const BirdProblems = () => (
  <InfoGrid eyebrow="Why It Matters" title="Problems Caused by Birds" text="Birds can create serious issues for your property and health" items={items} />
);

export default BirdProblems;
