import React from 'react';
import PageLayout from './components/PageLayout.jsx';
import MosquitoHero from './MosquitoHero.jsx';
import MosquitoRisks from './MosquitoRisks.jsx';
import MosquitoProcess from './MosquitoProcess.jsx';
import MosquitoWhyChoose from './MosquitoWhyChoose.jsx';
import PestCTA from './PestCTA.jsx';
import MosquitoFAQ from './MosquitoFAQ.jsx';

const MosquitoPage = () => (
  <PageLayout footerCta={false} className="tes-page mosquito-page-wrapper">
    <MosquitoHero />
    <MosquitoRisks />
    <MosquitoProcess />
    <MosquitoWhyChoose />
    <PestCTA />
    <MosquitoFAQ />
  </PageLayout>
);

export default MosquitoPage;
