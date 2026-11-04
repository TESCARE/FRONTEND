import React from 'react';
import FAQ from './components/FAQ.jsx';

const faqs = [
  { question: 'How long does bird net last?', answer: 'Our high-quality bird nets are UV stabilized and highly durable, typically lasting between 3 to 5 years depending on weather conditions and maintenance.' },
  { question: 'Is bird net visible from outside?', answer: "We use fine, transparent or appropriately colored netting that blends seamlessly with your building's exterior, making it virtually invisible from a distance." },
  { question: 'Is installation safe?', answer: 'Yes, our professional technicians follow strict safety protocols and use specialized equipment to ensure safe and secure installation without damaging your property.' },
  { question: 'Does the net affect ventilation?', answer: 'Not at all. The mesh design allows for completely unrestricted airflow and natural light to pass through, maintaining perfect ventilation for your space.' },
];

const BirdFAQ = () => <FAQ faqs={faqs} text="Everything you need to know before booking." />;

export default BirdFAQ;
