import React from 'react';
import { BadgePercent, ArrowRight } from 'lucide-react';
import PageHero from './components/PageHero.jsx';

const OfferHero = () => (
  <PageHero
    eyebrow="Limited-time offers"
    icon={BadgePercent}
    compact
    title={<>Special Offers on Pest Control &amp; <span className="highlight-green">Bird Netting</span></>}
    text="Save more with our limited-time service discounts and curated combo packages."
    actions={
      <button type="button" className="btn btn--primary btn--lg" onClick={() => (window.location.hash = '#book')}>Claim an offer <ArrowRight /></button>
    }
  />
);

export default OfferHero;
