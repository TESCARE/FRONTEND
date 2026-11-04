import React, { useState } from 'react';
import { Bug, Home, Shield, CheckCircle2, Tag, Clock, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import SectionHead from './components/SectionHead.jsx';
import './OfferCards.css';

const offers = [
  {
    tag: 'LIMITED TIME DEAL',
    code: 'ROACH50',
    title: '50% OFF',
    subtitle: 'Cockroach Eradication Package',
    tone: 'emerald',
    oldPrice: '₹3,999',
    newPrice: '₹1,999',
    icon: Bug,
    features: [
      'Targeted Gel Baiting in all kitchen cabinets',
      'Advanced border spray for baseboards & drains',
      '90-Day Free Re-treatment Warranty',
      '100% Odourless & Non-Toxic chemistry',
    ],
    btnText: 'Claim 50% Off Offer',
    footerText: 'Valid till March 31, 2026',
  },
  {
    tag: 'MOST POPULAR PROMO',
    code: 'NETSAFE30',
    title: '30% OFF',
    subtitle: 'Balcony Bird Net Installation',
    tone: 'orange',
    oldPrice: '₹4,999',
    newPrice: '₹3,499',
    icon: Home,
    features: [
      'Garware UV-Stabilized 100% Virgin Nylon Netting',
      'Marine Grade SS 316 Wire Rope & Fasteners',
      '3-Year Free Re-Tensioning Guarantee',
      'Invisible mesh that keeps view 100% open',
    ],
    btnText: 'Claim 30% Off Offer',
    footerText: 'Valid till April 15, 2026',
    featured: true,
  },
  {
    tag: 'FREE ZERO-COST ASSESSMENT',
    code: 'FREETEST',
    title: '100% FREE',
    subtitle: 'Termite & Borer Site Audit',
    tone: 'blue',
    oldPrice: '₹1,500',
    newPrice: 'FREE',
    icon: Shield,
    features: [
      'Comprehensive 45-Point termite inspection',
      'Acoustic & moisture detection of hidden colonies',
      'Full digital assessment report with floorplan',
      'Zero obligation to purchase treatment',
    ],
    btnText: 'Book Free Inspection',
    footerText: 'Limited daily slots available',
  },
];

const OfferCards = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section className="section section--white offers">
      <div className="container">
        <SectionHead
          eyebrow="Verified Promotions"
          icon={Tag}
          center={true}
          title="Exclusive Savings On Guaranteed Protection"
          text="Transparent rates, certified technicians and warranty-backed peace of mind — now with limited-period seasonal discounts."
        />
        <div className="offers__grid">
          {offers.map((o, i) => {
            const Icon = o.icon;
            const isCopied = copiedCode === o.code;
            return (
              <Reveal
                key={i}
                delay={i * 0.1}
                className={`offer offer--${o.tone} ${o.featured ? 'offer--featured' : ''}`}
              >
                <div className="offer__top">
                  <div className="offer__tag-row">
                    <span className="offer__tag">{o.tag}</span>
                    <button
                      type="button"
                      className="offer__copy-btn"
                      onClick={() => handleCopy(o.code)}
                      title="Copy coupon code"
                    >
                      {isCopied ? <Check size={13} /> : <Copy size={13} />}
                      <span>{isCopied ? 'Copied!' : o.code}</span>
                    </button>
                  </div>
                  <span className="offer__icon"><Icon /></span>
                  <h3>{o.title}</h3>
                  <p>{o.subtitle}</p>
                </div>

                <div className="offer__body">
                  <div className="offer__price">
                    <span className="offer__old">{o.oldPrice}</span>
                    <span className="offer__new">{o.newPrice}</span>
                    <span className="offer__inc">Includes Warranty</span>
                  </div>

                  <ul className="offer__features">
                    {o.features.map((f, j) => (
                      <li key={j}>
                        <CheckCircle2 size={16} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="btn btn--primary btn--sq btn--block btn--lg"
                    onClick={() => (window.location.hash = '#book')}
                  >
                    <span>{o.btnText}</span>
                    <ArrowRight size={17} />
                  </button>

                  <p className="offer__foot">
                    <Clock size={14} /> {o.footerText}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferCards;
