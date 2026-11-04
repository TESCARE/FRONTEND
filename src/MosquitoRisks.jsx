import React from 'react';
import InfoGrid from './components/InfoGrid.jsx';

const items = [
  { title: "Dengue", desc: "Spread by Aedes mosquitoes, which breed in clean standing water and bite through the day." },
  { title: "Malaria", desc: "Carried by Anopheles mosquitoes, most active between dusk and dawn." },
  { title: "Chikungunya", desc: "Causes severe joint pain that can linger for weeks after the fever clears." },
  { title: "Skin irritation", desc: "Repeated bites leave itching and welts, and scratching invites secondary infection." },
];

const MosquitoRisks = () => (
  <InfoGrid eyebrow="Health Risks" title="Health Risks from Mosquitoes" text="Mosquitoes carry dangerous diseases affecting millions" items={items} />
);

export default MosquitoRisks;
