import React from 'react';
import FAQ from './components/FAQ.jsx';

const faqs = [
  { question: "Is bedbug treatment safe for my family?", answer: "Yes, our treatments are completely safe for your family and pets. We use EPA-approved products and follow strict safety guidelines to ensure a risk-free environment during and after the treatment process." },
  { question: "How long does bedbug treatment take?", answer: "A typical bedbug treatment takes between 2 to 4 hours depending on the size of the area and the severity of the infestation. We also conduct follow-up visits to ensure complete elimination." },
  { question: "Will I need to leave my home during treatment?", answer: "Yes, for safety reasons, we require occupants and pets to vacate the premises during the chemical application and remain out for about 4 to 6 hours until the treated areas are completely dry." },
  { question: "How can I prevent bedbugs from coming back?", answer: "To prevent re-infestation, we recommend using protective mattress encasements, reducing clutter, vacuuming frequently, and carefully inspecting luggage and clothes after traveling." },
];

const BedbugFAQ = () => <FAQ faqs={faqs} text="Everything you need to know before booking." />;

export default BedbugFAQ;
