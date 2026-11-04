import React from 'react';
import { CalendarCheck } from 'lucide-react';
import PageHero from './components/PageHero.jsx';
import bookImage from './assets/heroes/book.webp';

const BookHero = () => (
  <PageHero
    eyebrow="Free Inspection"
    icon={CalendarCheck}
    image={bookImage}
    title={<>Book Your <span className="highlight-green">Free</span> Pest Inspection</>}
    text="Schedule a professional pest inspection or bird net installation with TESCARE experts. Our technicians will assess the problem and recommend the best solution."
    benefits={['Free Inspection', 'Same Day Service', 'Certified Technicians']}
  />
);

export default BookHero;
