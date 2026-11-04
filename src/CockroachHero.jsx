import React from 'react';
import ServiceHero from './components/ServiceHero.jsx';
import heroImage from './assets/heroes/cockroach.webp';

const benefits = ["Eco-Friendly & Kids/Pets Safe Chemicals", "Highly Trained & Background Verified Experts", "100% Satisfaction & 30-Day Service Warranty"];

const CockroachHero = () => (
  <ServiceHero
    title="Cockroach Control Service"
    subtitle="Keep your home cockroach free and healthy with effective, long-lasting cockroach control."
    benefits={benefits}
    image={heroImage}
    defaultPest="cockroach"
  />
);

export default CockroachHero;
