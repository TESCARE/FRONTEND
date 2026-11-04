import React from 'react';
import { Headphones } from 'lucide-react';
import PageHero from './components/PageHero.jsx';
import contactImage from './assets/heroes/contact.webp';

const ContactHero = () => (
  <PageHero
    eyebrow="Contact"
    icon={Headphones}
    image={contactImage}
    compact
    title={<>Get in Touch with <span className="highlight-green">TESCARE</span></>}
    text="Need pest control or bird netting? Contact our experts today — we respond within business hours, usually in minutes."
  />
);

export default ContactHero;
