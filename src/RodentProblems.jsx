import React from 'react';
import InfoGrid from './components/InfoGrid.jsx';

const items = [
  { title: "Food contamination", desc: "Droppings, urine and gnawing spoil stored grain, packaged food and preparation surfaces." },
  { title: "Health risks", desc: "Rats and mice spread leptospirosis, salmonella and other infections through contact and waste." },
  { title: "Property damage", desc: "Gnawed cables, pipes and insulation in false ceilings and ducts \u2014 a genuine fire risk." },
  { title: "Noise in ceilings", desc: "Scratching and scurrying overhead at night, usually the first sign of an established nest." },
];

const RodentProblems = () => (
  <InfoGrid eyebrow="Health & Property Risks" title="Problems Caused by Rodents" text="Rodents pose serious health and property risks" items={items} />
);

export default RodentProblems;
