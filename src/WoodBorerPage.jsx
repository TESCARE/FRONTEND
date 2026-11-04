import React from 'react';
import PageLayout from './components/PageLayout.jsx';
import WoodBorerHero from './WoodBorerHero.jsx';
import WoodBorerSigns from './WoodBorerSigns.jsx';
import WoodBorerProcess from './WoodBorerProcess.jsx';
import WoodBorerWhyChoose from './WoodBorerWhyChoose.jsx';
import WoodBorerCTA from './WoodBorerCTA.jsx';
import WoodBorerFAQ from './WoodBorerFAQ.jsx';

const WoodBorerPage = () => (
  <PageLayout footerCta={false} className="tes-page woodborer-page-wrapper">
    <WoodBorerHero />
    <WoodBorerSigns />
    <WoodBorerProcess />
    <WoodBorerWhyChoose />
    <WoodBorerCTA />
    <WoodBorerFAQ />
  </PageLayout>
);

export default WoodBorerPage;
