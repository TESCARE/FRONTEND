import React from 'react';
import { Users, ArrowRight, Phone } from 'lucide-react';
import PageHero from './components/PageHero.jsx';
import aboutHeroBg from './assets/about-hero.webp';
import aboutHeroBgMobile from './assets/about-hero-mobile.webp';
import navigate from './navigate.js';

const AboutHero = () => (
  <PageHero
    eyebrow="About Tescare"
    icon={Users}
    image={aboutHeroBg}
    imageMobile={aboutHeroBgMobile}
    title={<>Protecting Homes &amp; Businesses with <span className="highlight-green">Smart Pest Solutions</span></>}
    text="TESCARE delivers safe, reliable, and eco-friendly pest control and bird netting services across residential and commercial spaces."
    actions={
      <>
        <button type="button" className="btn btn--primary btn--lg" onClick={() => navigate('#book')}>
          <span>Book Inspection</span> <ArrowRight />
        </button>
        <button type="button" className="btn btn--outline-light btn--lg" onClick={() => navigate('#contact')}>
          <Phone /> <span>Contact Us</span>
        </button>
      </>
    }
  />
);

export default AboutHero;
