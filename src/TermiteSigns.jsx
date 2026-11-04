import React from 'react';
import InfoGrid from './components/InfoGrid.jsx';

const items = [
  { title: "Mud tubes on walls", desc: "Pencil-width mud tunnels along skirting, foundations and masonry \u2014 the route termites use to reach timber." },
  { title: "Hollow wood sounds", desc: "Tapped timber sounds papery or empty because the colony has eaten it from the inside out." },
  { title: "Damaged furniture", desc: "Blistered surfaces, sagging joints and crumbling edges on skirting, door frames and cupboards." },
  { title: "Small wings near windows", desc: "Discarded wings on sills and floors after a swarm \u2014 a sign a new colony is establishing nearby." },
];

const TermiteSigns = () => (
  <InfoGrid eyebrow="Warning Signs" title="Signs of Termite Infestation" text="Early detection can save thousands in repair costs" items={items} />
);

export default TermiteSigns;
