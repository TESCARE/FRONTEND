import React from 'react';
import FAQ from './components/FAQ.jsx';

const faqs = [
  { question: "Are the mosquito treatments safe for children and pets?", answer: "Yes, absolutely. We use EPA-approved products, and once the treatment has dried (usually within 30 minutes), your yard is completely safe for children and pets to enjoy." },
  { question: "How long does the mosquito control treatment last?", answer: "Our standard barrier treatments are highly effective and typically provide robust protection against mosquitoes for 21 to 30 days, depending on local weather conditions." },
  { question: "Do I need to be home during the service?", answer: "No, as long as we have clear access to your exterior property and any gates are unlocked, you do not need to be home while our technicians perform the treatment." },
  { question: "What if it rains after my treatment?", answer: "Our products are specially formulated to withstand normal rainfall once they have fully dried. If heavy rain occurs immediately after application, we will assess and re-treat if necessary." },
];

const MosquitoFAQ = () => <FAQ faqs={faqs} text="Everything you need to know before booking." />;

export default MosquitoFAQ;
