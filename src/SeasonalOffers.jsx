import React from 'react';
import { Gift, Droplet, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import SectionHead from './components/SectionHead.jsx';
import './SeasonalOffers.css';

const seasonal = [
  {
    icon: Gift,
    tone: 'emerald',
    title: 'Festive Season Pest Shield',
    desc: 'Prepare your home for guests, family dinners, and festivities. Comprehensive whole-house cockroach, ant, and fly treatment with guaranteed odourless chemistry.',
    badge: 'Up to 35% OFF',
    highlight: 'Includes 90-Day Holiday Warranty',
  },
  {
    icon: Droplet,
    tone: 'blue',
    title: 'Summer & Monsoon Mosquito Defense',
    desc: 'Beat the heat and humidity! Specialized larval breeding disruption, drain treatment, and fine garden misting with zero harm to beneficial pollinators.',
    badge: 'Up to 40% OFF',
    highlight: 'Free Re-Misting If Rain Persists',
  },
];

const SeasonalOffers = () => (
  <section className="section section--white seasonal">
    <div className="container">
      <SectionHead
        eyebrow="Seasonal Campaigns"
        icon={Sparkles}
        center={true}
        title="Timely Seasonal Protection Offers"
        text="Targeted treatments aligned with seasonal breeding spikes — book ahead to secure priority technician slots."
      />
      <div className="seasonal__grid">
        {seasonal.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal
              key={i}
              delay={i * 0.1}
              className={`seasonal__card seasonal__card--${s.tone}`}
            >
              <div className="seasonal__top">
                <span className="seasonal__icon"><Icon /></span>
                <span className="seasonal__badge">{s.badge}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="seasonal__highlight">
                <ShieldCheck size={16} /> {s.highlight}
              </div>
              <div className="seasonal__actions">
                <button
                  type="button"
                  className="btn btn--white btn--sq btn--lg"
                  onClick={() => (window.location.hash = '#book')}
                >
                  <span>Claim Seasonal Discount</span>
                  <ArrowRight />
                </button>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default SeasonalOffers;
