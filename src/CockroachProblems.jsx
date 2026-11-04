import React from 'react';
import InfoGrid from './components/InfoGrid.jsx';

const items = [
  { title: "Food contamination", desc: "Roaches travel through drains and waste, then across worktops, utensils and stored food." },
  { title: "Allergy triggers", desc: "Shed skins and droppings carry allergens linked to asthma attacks, particularly in children." },
  { title: "Rapid infestation", desc: "A single German cockroach egg case holds up to 40 nymphs, so numbers climb quickly." },
  { title: "Disease transmission", desc: "They can carry salmonella, E. coli and other organisms behind common stomach illness." },
];

const CockroachProblems = () => (
  <InfoGrid eyebrow="Health Risks" title="Problems Caused by Cockroaches" text="Cockroaches pose serious health and hygiene risks" items={items} />
);

export default CockroachProblems;
