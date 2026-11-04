import React from 'react';
import { BadgeCheck, ShieldCheck, UserCheck, Zap } from 'lucide-react';
import BenefitGrid from './components/BenefitGrid.jsx';
import heroImage from './assets/heroes/rodent.webp';

const items = [
  { title: 'Experienced technicians', icon: UserCheck },
  { title: 'Safe methods', icon: ShieldCheck },
  { title: 'Quick response', icon: Zap },
  { title: 'Guaranteed results', icon: BadgeCheck },
];

const RodentWhyChoose = () => (
  <BenefitGrid
    eyebrow="Why Tescare"
    title="Why Choose TESCARE"
    items={items}
    image={heroImage}
    imageAlt="Tescare technician at work"
  />
);

export default RodentWhyChoose;
