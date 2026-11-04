import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import HomePage from './HomePage.jsx';
import AboutPage from './AboutPage.jsx';
import BirdNettingPage from './BirdNettingPage.jsx';
import TermitePage from './TermitePage.jsx';
import CockroachPage from './CockroachPage.jsx';
import MosquitoPage from './MosquitoPage.jsx';
import RodentPage from './RodentPage.jsx';
import BedbugPage from './BedbugPage.jsx';
import WoodBorerPage from './WoodBorerPage.jsx';
import ContactPage from './ContactPage.jsx';
import BookPage from './BookPage.jsx';
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx';
import TermsPage from './TermsPage.jsx';

// Hash-based routes (unchanged URLs)
const ROUTES = {
  '#about': AboutPage,
  '#bird-netting': BirdNettingPage,
  '#termite-control': TermitePage,
  '#cockroach-control': CockroachPage,
  '#mosquito-control': MosquitoPage,
  '#rodent-control': RodentPage,
  '#bedbug-control': BedbugPage,
  '#woodborer-control': WoodBorerPage,
  '#contact': ContactPage,
  '#book': BookPage,
  '#privacy': PrivacyPolicyPage,
  '#terms': TermsPage,
};

const resolve = (hash) => ROUTES[hash] || HomePage;

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const Page = resolve(currentHash);
  const routeKey = ROUTES[currentHash] ? currentHash : '#home';

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={routeKey}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Page />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
