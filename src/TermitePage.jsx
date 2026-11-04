import React from 'react';
import PageLayout from './components/PageLayout.jsx';
import TermiteHero from './TermiteHero.jsx';
import TermiteSigns from './TermiteSigns.jsx';
import TermiteSolutions from './TermiteSolutions.jsx';
import TermiteBenefits from './TermiteBenefits.jsx';
import PestCTA from './PestCTA.jsx';
import TermiteFAQ from './TermiteFAQ.jsx';

const TermitePage = () => (
  <PageLayout footerCta={false} className="tes-page termite-page-wrapper">
    <TermiteHero />
    <TermiteSigns />
    <TermiteSolutions />
    <TermiteBenefits />
    <PestCTA />
    <TermiteFAQ />
  </PageLayout>
);

export default TermitePage;
