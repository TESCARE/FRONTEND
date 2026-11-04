import React from 'react';
import PageLayout from './components/PageLayout.jsx';
import OfferHero from './OfferHero.jsx';
import OfferCards from './OfferCards.jsx';
import ComboPackages from './ComboPackages.jsx';
import SeasonalOffers from './SeasonalOffers.jsx';
import PestCTA from './PestCTA.jsx';

const OffersPage = () => (
  <PageLayout footerCta={false} className="offers-page-wrapper">
    <OfferHero />
    <OfferCards />
    <ComboPackages />
    <SeasonalOffers />
    <PestCTA />
  </PageLayout>
);

export default OffersPage;
