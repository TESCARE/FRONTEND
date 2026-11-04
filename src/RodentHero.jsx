import React from 'react';
import ServiceHero from './components/ServiceHero.jsx';
import heroImage from './assets/heroes/rodent.webp';

const benefits = ["Advanced Baiting & Trapping Technology", "Entry Point Identification & Proofing", "Safe, Eco-Friendly, & Humane Solutions"];

const RodentHero = () => (
  <ServiceHero
    title="Rodent Control Services"
    subtitle="Protect your home or business from rats and rodents that cause damage and spread disease."
    benefits={benefits}
    image={heroImage}
    defaultPest="rodent"
  />
);

export default RodentHero;
