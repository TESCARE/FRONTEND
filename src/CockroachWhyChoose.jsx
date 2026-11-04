import React from 'react';
import { Bug, CalendarCheck, UtensilsCrossed, Wind } from 'lucide-react';
import BenefitGrid from './components/BenefitGrid.jsx';
import heroImage from './assets/heroes/cockroach.webp';

const items = [
  { title: 'Advanced German cockroach control', icon: Bug },
  { title: 'Safe for food areas', icon: UtensilsCrossed },
  { title: 'Odorless treatment', icon: Wind },
  { title: 'Long-term prevention', icon: CalendarCheck },
];

const CockroachWhyChoose = () => (
  <BenefitGrid
    eyebrow="Why Tescare"
    title="Why Choose TESCARE"
    items={items}
    image={heroImage}
    imageAlt="Tescare technician at work"
  />
);

export default CockroachWhyChoose;
