import React from 'react';
import FAQ from './components/FAQ.jsx';

const faqs = [
  { question: "How do I know if I have a rodent problem?", answer: "Common signs include droppings, gnaw marks on furniture or wires, scratching noises in walls or ceilings, and nesting materials like shredded paper or fabric." },
  { question: "Are the rodent control methods safe for pets?", answer: "Yes, our technicians strategically place traps and use tamper-resistant bait stations in areas that are inaccessible to pets and children, ensuring their safety." },
  { question: "How long does it take to eliminate rodents?", answer: "The timeframe depends on the severity of the infestation. You may see a significant reduction within a few days, but complete elimination typically takes 1 to 3 weeks." },
  { question: "Do you offer ongoing rodent prevention?", answer: "Absolutely. Along with treatment, we seal entry points, provide sanitation recommendations, and offer ongoing monitoring plans to keep rodents from returning." },
];

const RodentFAQ = () => <FAQ faqs={faqs} text="Everything you need to know before booking." />;

export default RodentFAQ;
