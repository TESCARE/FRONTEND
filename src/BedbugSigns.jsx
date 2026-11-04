import React from 'react';
import InfoGrid from './components/InfoGrid.jsx';

const items = [
  { title: "Red bite marks on skin", desc: "Itchy welts in clusters or short lines, usually on arms, shoulders and legs exposed during sleep." },
  { title: "Blood spots on sheets", desc: "Small rust-coloured smears on bedding where bugs were crushed after feeding." },
  { title: "Small dark stains on mattress", desc: "Dark specks of digested blood along seams, piping and the underside of the mattress." },
  { title: "Bedbugs hiding in cracks", desc: "Live insects and pale shed skins tucked into headboard joints, bed frames and skirting gaps." },
];

const BedbugSigns = () => (
  <InfoGrid eyebrow="Warning Signs" title="Signs of Bedbug Infestation" text="Look out for these warning signs in your bedroom" items={items} />
);

export default BedbugSigns;
