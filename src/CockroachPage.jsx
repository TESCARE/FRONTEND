import React from 'react';
import PageLayout from './components/PageLayout.jsx';
import CockroachHero from './CockroachHero.jsx';
import CockroachProblems from './CockroachProblems.jsx';
import CockroachProcess from './CockroachProcess.jsx';
import CockroachWhyChoose from './CockroachWhyChoose.jsx';
import PestCTA from './PestCTA.jsx';
import CockroachFAQ from './CockroachFAQ.jsx';

const CockroachPage = () => (
  <PageLayout footerCta={false} className="tes-page croach-page-wrapper">
    <CockroachHero />
    <CockroachProblems />
    <CockroachProcess />
    <CockroachWhyChoose />
    <PestCTA />
    <CockroachFAQ />
  </PageLayout>
);

export default CockroachPage;
