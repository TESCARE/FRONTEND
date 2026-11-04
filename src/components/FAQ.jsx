import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

/**
 * FAQ — shared accordion section.
 * props: faqs [{question, answer}], title, text, soft (bg)
 */
const FAQ = ({ faqs = [], title = 'Frequently Asked Questions', text, eyebrow = 'FAQ', soft = true, className = '' }) => {
  const [open, setOpen] = useState(null);

  return (
    <section className={`section ${soft ? 'section--soft' : 'section--white'} ${className}`}>
      <div className="container container--narrow">
        <SectionHead eyebrow={eyebrow} icon={HelpCircle} title={title} text={text} />
        <div className="faq">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button type="button" className="faq__q" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  <span>{faq.question}</span>
                  <span className="faq__icon"><ChevronDown /></span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq__a">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
