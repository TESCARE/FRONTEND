import React from 'react';
import { Wrench, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHead from './components/SectionHead.jsx';
import './ServicesSection.css';

import bedbugImg from './assets/services/bedbug_control_1779952136140.png';
import rodentImg from './assets/services/rodent_control_1779952155477.png';
import mosquitoImg from './assets/services/mosquito_control_1779952172778.png';
import cockroachImg from './assets/services/cockroach_control_1779952189408.png';
import termiteImg from './assets/services/termite_control_1779952210853.png';
import birdNettingImg from './assets/services/bird_netting_1779952229064.png';
import woodBorerImg from './assets/services/wood_borer_control_1779952247139.png';

const services = [
  {
    title: 'Bird Netting Solutions',
    href: '#bird-netting',
    img: birdNettingImg,
    tag: 'Invisible UV Mesh • 3-Year Warranty',
    description: 'High-density Garware mesh for balconies, windows and high-rise facades \u2014 keeps pigeons out, preserves the view, and harms no birds.',
    badge: 'Most Popular',
  },
  {
    title: 'Termite Control (Anti-Termite)',
    href: '#termite-control',
    img: termiteImg,
    tag: 'Drill-Fill-Seal • 5-Year Protection',
    description: 'Non-repellent chemical barriers for pre- and post-construction foundations and woodwork, stopping damage before it spreads.',
    badge: 'Structural Defense',
  },
  {
    title: 'Cockroach Control',
    href: '#cockroach-control',
    img: cockroachImg,
    tag: 'Targeted Gel Baiting + Eco Spray',
    description: 'Targeted gel baiting clears German and American roach nests without emptying your kitchen. Odourless and food-safe.',
  },
  {
    title: 'Bedbug Elimination',
    href: '#bedbug-control',
    img: bedbugImg,
    tag: 'Thermal & Chemical Eradication',
    description: 'Dual-session thermal and chemical treatment of mattresses and wall crevices, clearing live bugs and unhatched eggs alike.',
  },
  {
    title: 'Mosquito Misting & Control',
    href: '#mosquito-control',
    img: mosquitoImg,
    tag: 'Larval & Adult Breeding Shield',
    description: 'Clinical misting that breaks the breeding cycle across gardens, balconies and drainage points, lowering dengue and malaria risk.',
  },
  {
    title: 'Rodent & Rat Proofing',
    href: '#rodent-control',
    img: rodentImg,
    tag: 'Tamper-Proof Baiting & Proofing',
    description: 'Smart trapping, tamper-proof baiting and entry sealing that keeps rats out of false ceilings, ducts and storage rooms.',
  },
  {
    title: 'Wood Borer Preservation',
    href: '#woodborer-control',
    img: woodBorerImg,
    tag: 'Precision Syringe Chemical Injection',
    description: 'Precision syringe injection that halts powder-post beetles in furniture, doors and antique woodwork before decay sets in.',
  },
];

const ServiceCard = ({ service, index, wide }) => (
  <motion.a
    href={service.href}
    className={`svc-card ${wide ? `svc-card--wide svc-card--wide-${wide}` : ''}`}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
  >
    <img src={service.img} alt={service.title} loading="lazy" className="svc-card__img" />
    <div className="svc-card__shade" />

    {/* Top Bar with Badge & Arrow */}
    <div className="svc-card__top">
      {service.badge ? (
        <span className="svc-card__badge"><Sparkles size={13} /> {service.badge}</span>
      ) : (
        <span />
      )}
      <span className="svc-card__arrow" aria-label="Explore service">
        <ArrowUpRight size={18} />
      </span>
    </div>

    <div className="svc-card__body">
      <span className="svc-card__tag">{service.tag}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="svc-card__link">Explore Treatment &amp; Pricing</span>
    </div>
  </motion.a>
);

const ServicesSection = () => {
  return (
    <section className="section section--white services">
      <div className="container">
        <SectionHead
          eyebrow="Clinical Pest &amp; Netting Solutions"
          icon={Wrench}
          center={true}
          title="Engineered For Complete Space Protection"
          text="From proactive prevention to complete infestation eradication, our certified specialists use precision science and non-toxic chemicals."
        />
        <div className="services__grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.href}
              service={service}
              index={index}
              wide={
                index === 0
                  ? 'lead'
                  : index === services.length - 1
                  ? 'end'
                  : null
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
