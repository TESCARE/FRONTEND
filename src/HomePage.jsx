import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import PageLayout from './components/PageLayout.jsx';
import BookingSection from './BookingSection.jsx';
import ServicesSection from './ServicesSection.jsx';
import HowItWorks from './HowItWorks.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';
import TrustedExperts from './TrustedExperts.jsx';
import OurFootprints from './OurFootprints.jsx';
import PestControlTips from './PestControlTips.jsx';
import homeHeroBg from './assets/home_hero_bg.jpg';
import './HomePage.css';
import navigate from './navigate.js';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const HomeHero = () => {
  return (
    <section className="hero-dark home-hero hero-wrapper">
      {/* Background Image with Cinematic Radial Vignette */}
      <div className="home-hero__media" aria-hidden="true">
        <img
          src={homeHeroBg}
          alt="Tescare Professional Residential Pest Defence Inspection"
          className="home-hero__bg-img"
        />
        <div className="home-hero__overlay" />
        <div className="home-hero__glow" />
      </div>

      <div className="container home-hero__inner">
        <div className="home-hero__content">
          <motion.h1 className="hero-title" {...fadeUp(0.08)}>
            Protect Your Living Space With <span className="highlight-green">Scientific Pest Defence</span>
          </motion.h1>

          <motion.p className="hero-subtitle" {...fadeUp(0.15)}>
            Effective, long-lasting pest control and invisible bird netting for homes and businesses across Chennai.
          </motion.p>

          <motion.div className="home-hero__actions hero-actions" {...fadeUp(0.3)}>
            <button
              type="button"
              className="btn btn--primary btn--lg"
              onClick={() => navigate('#book')}
            >
              <span>Book Free Inspection</span>
              <ArrowRight />
            </button>
            <a
              href="tel:+918754574229"
              className="btn btn--outline-light btn--lg"
            >
              <Phone />
              <span>+91 87545 74229</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Trust Banner Ribbon */}
      <div className="home-hero__ribbon">
        <div className="container home-hero__ribbon-inner">
          <div className="home-hero__ribbon-item">
            <ShieldCheck size={20} />
            <div>
              <strong>Govt. Approved Chemicals</strong>
              <span>100% CIB &amp; RC Certified</span>
            </div>
          </div>
          <div className="home-hero__ribbon-item">
            <Award size={20} />
            <div>
              <strong>100% Re-treatment Guarantee</strong>
              <span>Free follow-up if pests return</span>
            </div>
          </div>
          <div className="home-hero__ribbon-item">
            <Clock size={20} />
            <div>
              <strong>Rapid 45-Min Response</strong>
              <span>Emergency slots available</span>
            </div>
          </div>
          <div className="home-hero__ribbon-item">
            <Sparkles size={20} />
            <div>
              <strong>Hassle-Free Booking</strong>
              <span>Instant price calculation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <PageLayout className="home-page-wrapper">
      <HomeHero />
      <BookingSection />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseUs />
      <TrustedExperts />
      <OurFootprints />
      <PestControlTips />
    </PageLayout>
  );
};

export default HomePage;
