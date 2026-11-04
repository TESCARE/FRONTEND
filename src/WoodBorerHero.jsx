import React from 'react';
import ServiceHero from './components/ServiceHero.jsx';
import heroImage from './assets/heroes/woodborer.webp';

const benefits = ["Specialized Injection & Wood Preservation Treatment", "Complete Larvae & Beetle Eradication", "Multi-Year Anti-Borer Protection Shield"];

const WoodBorerHero = () => (
  <ServiceHero
    title="Wood Borer Control Service"
    subtitle="Protect your wooden furniture, doors, and structures from damaging wood borers with safe and effective treatment solutions."
    benefits={benefits}
    image={heroImage}
    defaultPest="woodborer"
  />
);

export default WoodBorerHero;
