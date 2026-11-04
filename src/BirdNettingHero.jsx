import React from 'react';
import ServiceHero from './components/ServiceHero.jsx';
import heroImage from './assets/heroes/bird-netting.webp';

const benefits = ['Heavy-Duty HDPE UV Resistant Nets', 'Rust-Free Stainless Steel Wire Framing', '3-Year to 5-Year Performance Warranty'];

const BirdNettingHero = () => (
  <ServiceHero
    eyebrow="Bird Netting Service"
    title="Professional Bird Netting Installation"
    subtitle="Protect your balconies, windows, and buildings from pigeons and birds with durable bird netting solutions."
    benefits={benefits}
    image={heroImage}
    defaultPest="birdnetting"
  />
);

export default BirdNettingHero;
