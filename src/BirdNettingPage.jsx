import React from 'react';
import PageLayout from './components/PageLayout.jsx';
import BirdNettingHero from './BirdNettingHero.jsx';
import BirdProblems from './BirdProblems.jsx';
import BirdSolutions from './BirdSolutions.jsx';
import BirdBenefits from './BirdBenefits.jsx';
import BirdProcess from './BirdProcess.jsx';
import PestCTA from './PestCTA.jsx';
import BirdFAQ from './BirdFAQ.jsx';

const BirdNettingPage = () => (
  <PageLayout footerCta={false} className="tes-page bird-netting-page-wrapper">
    <BirdNettingHero />
    <BirdProblems />
    <BirdSolutions />
    <BirdBenefits />
    <BirdProcess />
    <PestCTA />
    <BirdFAQ />
  </PageLayout>
);

export default BirdNettingPage;
