import React from 'react';
import InfoGrid from './components/InfoGrid.jsx';

const items = [
  { title: "Tiny holes in wooden furniture", desc: "Round exit holes roughly 1\u20132 mm across, left as adult beetles emerge from the timber." },
  { title: "Fine powder (wood dust) near holes", desc: "Soft, flour-like frass collecting below furniture, shelves and door frames." },
  { title: "Weak or hollow sounding wood", desc: "Timber that flexes or sounds empty, with tunnelling hidden under an intact surface." },
  { title: "Small insects emerging from wood", desc: "Adult beetles appearing on or around furniture, most often in the warmer months." },
];

const WoodBorerSigns = () => (
  <InfoGrid eyebrow="Warning Signs" title="Signs of Wood Borer Infestation" text="Look out for these warning signs in wooden furniture and structures." items={items} />
);

export default WoodBorerSigns;
