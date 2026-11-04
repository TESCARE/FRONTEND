import React from 'react';
import FAQ from './components/FAQ.jsx';

const faqs = [
  { question: "How quickly will I see results?", answer: "You will typically start seeing a significant reduction in cockroach activity within 24 to 48 hours after our treatment. Complete elimination usually takes a few weeks depending on the severity of the infestation." },
  { question: "Is the treatment safe for my kitchen?", answer: "Yes, our treatments are specifically designed to be safe for kitchen environments. We use targeted gel baits and eco-friendly solutions that are placed safely out of reach and do not contaminate your food preparation areas." },
  { question: "Why do cockroaches keep coming back?", answer: "Cockroaches often return due to accessible food sources, hidden moisture leaks, or unsealed entry points. Our comprehensive treatment not only eliminates the current population but also helps identify and address these root causes." },
  { question: "Do I need to empty my kitchen cabinets?", answer: "For our standard gel bait treatments, you generally do not need to empty your cabinets. If a more extensive spray treatment is required for a severe infestation, our technicians will guide you beforehand on how to prepare." },
];

const CockroachFAQ = () => <FAQ faqs={faqs} text="Everything you need to know before booking." />;

export default CockroachFAQ;
