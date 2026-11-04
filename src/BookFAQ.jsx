import React from 'react';
import FAQ from './components/FAQ.jsx';

const faqs = [
  { question: 'Is inspection really free?', answer: 'Yes, our initial pest inspection and consultation is completely free of charge. Our expert technician will assess your property, identify pest issues, and provide a detailed treatment plan without any obligation.' },
  { question: 'How soon can a technician visit?', answer: 'We offer same-day or next-day service depending on availability in your area. For emergency situations, we also have a 24/7 rapid response team.' },
  { question: 'How long does pest treatment take?', answer: 'The duration depends on the type of pest, the size of your property, and the severity of the infestation. A standard treatment usually takes between 1 to 3 hours.' },
  { question: 'Do you provide warranty?', answer: 'Yes, we provide a service warranty on most of our pest control treatments. If pests return during the warranty period, we will re-treat the affected areas at no additional cost.' },
];

const BookFAQ = () => <FAQ faqs={faqs} text="Common questions about inspections, timing and warranty." />;

export default BookFAQ;
