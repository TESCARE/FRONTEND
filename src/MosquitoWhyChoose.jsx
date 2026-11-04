import React from 'react';
import { CalendarCheck, Leaf, ShieldCheck, Zap } from 'lucide-react';
import BenefitGrid from './components/BenefitGrid.jsx';
import heroImage from './assets/heroes/mosquito.webp';

const items = [
  { title: 'Long-lasting protection', icon: ShieldCheck },
  { title: 'Eco-friendly treatment', icon: Leaf },
  { title: 'Fast service', icon: Zap },
  { title: 'Long-term prevention', icon: CalendarCheck },
];

const MosquitoWhyChoose = () => (
  <BenefitGrid
    eyebrow="Why Tescare"
    title="Why Choose TESCARE"
    items={items}
    image={heroImage}
    imageAlt="Tescare technician at work"
  />
);

export default MosquitoWhyChoose;
