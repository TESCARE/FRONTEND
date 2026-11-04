import React from 'react';
import FAQ from './components/FAQ.jsx';

const faqs = [
  { question: "How do I know if I have wood borers?", answer: "The most common signs are tiny round exit holes in wooden surfaces, fine powdery dust (frass) collecting near furniture, or occasionally hearing a faint ticking or scratching sound from within the wood." },
  { question: "Are wood borer treatments safe for indoor furniture?", answer: "Yes, our specialized treatments are completely safe for indoor furniture and family members. We use targeted, low-toxicity formulations that effectively penetrate wood without posing health risks." },
  { question: "How long does the wood borer treatment take?", answer: "A standard treatment usually takes 2 to 4 hours depending on the severity of the infestation and the number of items being treated. Deep injection methods ensure long-lasting results." },
  { question: "Will the treatment damage my furniture's finish?", answer: "No, our professional technicians use advanced application methods designed to protect your furniture's polish, paint, and varnish while effectively treating the underlying wood." },
];

const WoodBorerFAQ = () => <FAQ faqs={faqs} text="Everything you need to know before booking." />;

export default WoodBorerFAQ;
