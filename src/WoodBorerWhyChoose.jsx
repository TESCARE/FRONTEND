import React from 'react';
import { Leaf, ShieldCheck, Syringe, UserCheck } from 'lucide-react';
import BenefitGrid from './components/BenefitGrid.jsx';
import heroImage from './assets/heroes/woodborer.webp';

const items = [
  { title: 'Deep Wood Penetration Treatment', icon: Syringe },
  { title: 'Long-Lasting Wood Protection', icon: ShieldCheck },
  { title: 'Expert Pest Control Technicians', icon: UserCheck },
  { title: 'Safe & Effective Treatment', icon: Leaf },
];

const WoodBorerWhyChoose = () => (
  <BenefitGrid
    eyebrow="Why Tescare"
    title="Why Choose TESCARE"
    items={items}
    image={heroImage}
    imageAlt="Tescare technician at work"
  />
);

export default WoodBorerWhyChoose;
