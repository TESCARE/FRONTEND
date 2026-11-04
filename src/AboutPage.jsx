import React from 'react';
import PageLayout from './components/PageLayout.jsx';
import AboutHero from './AboutHero.jsx';
import OurStory from './OurStory.jsx';
import MissionVision from './MissionVision.jsx';
import StatsSection from './StatsSection.jsx';
import InstantBooking from './InstantBooking.jsx';

const AboutPage = () => (
  <PageLayout className="tes-page about-page-wrapper">
    <AboutHero />
    <OurStory />
    <MissionVision />
    <StatsSection />
    <InstantBooking />
  </PageLayout>
);

export default AboutPage;
