import React from 'react';
import { Bird, CalendarCheck, Home, Leaf } from 'lucide-react';
import BenefitGrid from './components/BenefitGrid.jsx';
import heroImage from './assets/heroes/bird-netting.webp';

const items = [
  { title: 'Prevent Pigeons', desc: '100% bird protection', icon: Bird },
  { title: 'Protect Property', desc: 'No damage or mess', icon: Home },
  { title: 'Long Lasting Nets', desc: 'Durable materials', icon: CalendarCheck },
  { title: 'Safe & Eco Friendly', desc: 'Humane solution', icon: Leaf },
];

const BirdBenefits = () => (
  <BenefitGrid
    eyebrow="Benefits"
    title="Benefits of Bird Netting"
    items={items}
    image={heroImage}
    imageAlt="Tescare technician at work"
  />
);

export default BirdBenefits;
