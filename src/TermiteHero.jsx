import React from 'react';
import ServiceHero from './components/ServiceHero.jsx';
import heroImage from './assets/heroes/termite.webp';

const benefits = ["Advanced Soil & Wood Treatment Technology", "Multi-Year Protection & Warranty", "100% Eco-Friendly & Family Safe Methods"];

const TermiteHero = () => (
  <ServiceHero
    title="Termite Control Service"
    subtitle="Protect your property from hidden termite damage before it spreads."
    benefits={benefits}
    image={heroImage}
    defaultPest="termite"
  />
);

export default TermiteHero;
