import React from 'react';
import { CalendarCheck, IndianRupee, ShieldCheck, UserCheck } from 'lucide-react';
import BenefitGrid from './components/BenefitGrid.jsx';
import heroImage from './assets/heroes/bedbug.webp';

const items = [
  { title: 'Safe pest control chemicals', icon: ShieldCheck },
  { title: 'Long-lasting protection', icon: CalendarCheck },
  { title: 'Professional technicians', icon: UserCheck },
  { title: 'Affordable service', icon: IndianRupee },
];

const BedbugWhyChoose = () => (
  <BenefitGrid
    eyebrow="Why Tescare"
    title="Why Choose TESCARE"
    items={items}
    image={heroImage}
    imageAlt="Tescare technician at work"
  />
);

export default BedbugWhyChoose;
