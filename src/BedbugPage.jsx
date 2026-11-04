import React from 'react';
import PageLayout from './components/PageLayout.jsx';
import BedbugHero from './BedbugHero.jsx';
import BedbugSigns from './BedbugSigns.jsx';
import BedbugProcess from './BedbugProcess.jsx';
import BedbugWhyChoose from './BedbugWhyChoose.jsx';
import BedbugCTA from './BedbugCTA.jsx';
import BedbugFAQ from './BedbugFAQ.jsx';

const BedbugPage = () => (
  <PageLayout footerCta={false} className="tes-page bedbug-page-wrapper">
    <BedbugHero />
    <BedbugSigns />
    <BedbugProcess />
    <BedbugWhyChoose />
    <BedbugCTA />
    <BedbugFAQ />
  </PageLayout>
);

export default BedbugPage;
