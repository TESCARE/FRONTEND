import React from 'react';
import PageLayout from './components/PageLayout.jsx';
import RodentHero from './RodentHero.jsx';
import RodentProblems from './RodentProblems.jsx';
import RodentSolutions from './RodentSolutions.jsx';
import RodentWhyChoose from './RodentWhyChoose.jsx';
import RodentCTA from './RodentCTA.jsx';
import RodentFAQ from './RodentFAQ.jsx';

const RodentPage = () => (
  <PageLayout footerCta={false} className="tes-page rodent-page-wrapper">
    <RodentHero />
    <RodentProblems />
    <RodentSolutions />
    <RodentWhyChoose />
    <RodentCTA />
    <RodentFAQ />
  </PageLayout>
);

export default RodentPage;
