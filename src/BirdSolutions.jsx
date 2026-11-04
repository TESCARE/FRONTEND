import React from 'react';
import { Home, Wind, Building2, Shield } from 'lucide-react';
import ProcessCards from './components/ProcessCards.jsx';
import balconyImg from './assets/balcony-netting.png';
import windowImg from './assets/window-netting.png';
import buildingImg from './assets/building-nets.png';
import industrialImg from './assets/industrial-netting.png';

const steps = [
  { number: '1', title: 'Balcony Netting', desc: 'Protect your balcony from birds while maintaining visibility and airflow', bg: balconyImg, icon: <Home /> },
  { number: '2', title: 'Window Netting', desc: 'Keep birds away from windows and prevent nesting in AC units', bg: windowImg, icon: <Wind /> },
  { number: '3', title: 'Building Safety Nets', desc: 'Comprehensive protection for entire building facades and terraces', bg: buildingImg, icon: <Building2 /> },
  { number: '4', title: 'Industrial Bird Netting', desc: 'Heavy-duty solutions for warehouses, factories, and commercial spaces', bg: industrialImg, icon: <Shield /> },
];

const BirdSolutions = () => (
  <ProcessCards eyebrow="Solutions" title="Bird Netting Solutions" text="Comprehensive protection for every type of space" steps={steps} />
);

export default BirdSolutions;
