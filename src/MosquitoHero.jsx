import React from 'react';
import ServiceHero from './components/ServiceHero.jsx';
import heroImage from './assets/heroes/mosquito.webp';

const benefits = ["Larvicide Treatments to Stop Breeding", "Indoor & Outdoor Safe Fogging / Spraying", "Highly Effective Shielding & Long Protection"];

const MosquitoHero = () => (
  <ServiceHero
    title="Mosquito Control Service"
    subtitle="Reduce mosquito breeding and protect your family from harmful bites and diseases."
    benefits={benefits}
    image={heroImage}
    defaultPest="mosquito"
  />
);

export default MosquitoHero;
