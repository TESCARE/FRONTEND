import React from 'react';
import { Bug, Droplet, Shield, Home, Package, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import SectionHead from './components/SectionHead.jsx';
import './ComboPackages.css';

const combos = [
  {
    saveTag: 'SAVE ₹3,000 (30% OFF)',
    title: 'Complete Home Defense Combo',
    subtitle: 'Integrated multi-pest protection plan',
    oldPrice: '₹9,999',
    newPrice: '₹6,999',
    warranty: '1-Year AMC with 3 Scheduled Visits',
    features: [
      { text: 'Cockroach Control (Kitchen Gel + Perimeter)', icon: Bug },
      { text: 'Mosquito Misting & Drain Larvicide Treatment', icon: Droplet },
      { text: 'Ant, Spider & Silverfish Baseboard Shield', icon: Shield },
    ],
  },
  {
    saveTag: 'SAVE ₹4,500 (35% OFF)',
    title: 'Apartment Safety & Bird Shield',
    subtitle: 'Complete pest elimination + balcony bird protection',
    oldPrice: '₹12,999',
    newPrice: '₹8,499',
    warranty: '3-Year Bird Net Warranty + 1-Year Pest AMC',
    features: [
      { text: 'Balcony Invisible Bird Netting (Garware HDPE)', icon: Home },
      { text: 'Complete Cockroach & Pest Gel Treatment', icon: Bug },
      { text: 'Window Mosquito Mesh & Pigeon Proofing', icon: Shield },
    ],
    featured: true,
  },
];

const ComboPackages = () => (
  <section className="section section--soft combo">
    <div className="container">
      <SectionHead
        eyebrow="Curated Bundles"
        icon={Package}
        center={true}
        title="Multi-Service Combo Packages"
        text="Bundle clinical pest elimination with balcony netting to maximize your home protection while saving significantly."
      />
      <div className="combo__grid">
        {combos.map((c, i) => (
          <Reveal
            key={i}
            delay={i * 0.12}
            className={`combo__card ${c.featured ? 'combo__card--featured' : ''}`}
          >
            <div className="combo__top">
              <span className="combo__save">{c.saveTag}</span>
              <h3>{c.title}</h3>
              <p className="combo__sub">{c.subtitle}</p>
            </div>

            <div className="combo__price">
              <span className="combo__old">{c.oldPrice}</span>
              <span className="combo__new">{c.newPrice}</span>
              <span className="combo__warranty">{c.warranty}</span>
            </div>

            <ul className="combo__features">
              {c.features.map((f, j) => {
                const Icon = f.icon;
                return (
                  <li key={j}>
                    <span className="icon-box combo__icon-box"><Icon /></span>
                    <div>
                      <strong>{f.text}</strong>
                      <span>Included in bundled rate</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              className="btn btn--primary btn--sq btn--block btn--lg"
              onClick={() => (window.location.hash = '#book')}
            >
              <span>Book Bundle Package</span>
              <ArrowRight />
            </button>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ComboPackages;
