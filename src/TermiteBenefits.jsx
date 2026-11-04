import React from 'react';
import { Ban, Home, Leaf, ShieldCheck } from 'lucide-react';
import BenefitGrid from './components/BenefitGrid.jsx';
import heroImage from './assets/heroes/termite.webp';

const items = [
  { title: '10-year warranty available', icon: ShieldCheck },
  { title: 'Eco-friendly chemicals', icon: Leaf },
  { title: 'No drilling in some cases', icon: Ban },
  { title: 'Complete property protection', icon: Home },
];

const TermiteBenefits = () => (
  <BenefitGrid
    eyebrow="Why Tescare"
    title="Why Choose TESCARE"
    items={items}
    image={heroImage}
    imageAlt="Tescare technician at work"
  />
);

export default TermiteBenefits;
