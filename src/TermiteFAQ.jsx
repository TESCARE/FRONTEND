import React from 'react';
import FAQ from './components/FAQ.jsx';

const faqs = [
  { question: "How do I know if I have termites?", answer: "Signs of a termite infestation include mud tubes on exterior walls, hollow-sounding wood, discarded wings near windows or doors, and frass (termite droppings)." },
  { question: "How long does termite treatment last?", answer: "A professional termite treatment can last anywhere from 3 to 5 years, depending on the type of treatment used and the environmental conditions around your property." },
  { question: "Is termite treatment safe for my home?", answer: "Yes, we use eco-friendly and approved chemicals that are safe for your family and pets when applied by our certified professionals." },
  { question: "Can termites come back after treatment?", answer: "While treatments are highly effective, termites can return if environmental conditions favor them. We recommend annual inspections to ensure your home remains protected." },
];

const TermiteFAQ = () => <FAQ faqs={faqs} text="Everything you need to know before booking." />;

export default TermiteFAQ;
