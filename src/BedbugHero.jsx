import React from 'react';
import ServiceHero from './components/ServiceHero.jsx';
import heroImage from './assets/heroes/bedbug.webp';

const benefits = ["Multi-Stage Residual Treatment", "Complete Egg Elimination Technology", "100% Odorless & Safe Chemicals"];

const BedbugHero = () => (
  <ServiceHero
    title="Bedbug Control Service"
    subtitle="Eliminate hidden bedbugs quickly with safe and effective pest control treatments."
    benefits={benefits}
    image={heroImage}
    defaultPest="bedbug"
  />
);

export default BedbugHero;
