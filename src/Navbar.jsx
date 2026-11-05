import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Phone, MessageCircle, Bug, Home, BedDouble, Wind, Rat, Syringe, Sparkles, ArrowRight } from 'lucide-react';
import logo from './assets/logo.png';
import './Navbar.css';
import navigate from './navigate.js';

export const PEST_LINKS = [
  { href: '#cockroach-control', label: 'Cockroach Control', icon: Bug, desc: 'Gel baiting & advanced spray' },
  { href: '#termite-control', label: 'Termite Control', icon: Home, desc: 'Drill-fill-seal soil & wood barrier' },
  { href: '#bedbug-control', label: 'Bedbug Control', icon: BedDouble, desc: 'Thermal & chemical eradication' },
  { href: '#mosquito-control', label: 'Mosquito Control', icon: Wind, desc: 'Breeding control & misting' },
  { href: '#rodent-control', label: 'Rodent Control', icon: Rat, desc: 'Proofing, baiting & smart traps' },
  { href: '#woodborer-control', label: 'Wood Borer Control', icon: Syringe, desc: 'Syringe injection preservation' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pestOpen, setPestOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash);
      setOpen(false);
      setPestOpen(false);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isHome = !hash || hash === '#' || hash === '#home';
  const pestActive = PEST_LINKS.some((l) => l.href === hash);

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav__inner">
          <a href="#home" className="nav__logo" aria-label="Tescare home">
            <img src={logo} alt="Tescare Pest Control & Bird Netting" />
          </a>

          <nav className="nav__links" aria-label="Main navigation">
            <a href="#home" className={`nav__item ${isHome ? 'is-active' : ''}`}>
              Home
            </a>
            <a href="#about" className={`nav__item ${hash === '#about' ? 'is-active' : ''}`}>
              About
            </a>

            {/* Pest Control Dropdown */}
            <div className="nav__dd">
              <button
                type="button"
                className={`nav__dd-trigger ${pestActive ? 'is-active' : ''}`}
                aria-haspopup="true"
              >
                <span>Pest Control</span>
                <ChevronDown className="nav__dd-arrow" />
              </button>
              
              <div className="nav__dd-menu">
                <div className="nav__dd-header">
                  <span className="nav__dd-badge"><Sparkles size={13} /> Clinical Pest Protection</span>
                  <p>Certified, safe &amp; eco-friendly treatments</p>
                </div>
                <div className="nav__dd-grid">
                  {PEST_LINKS.map(({ href, label, icon: Icon, desc }) => (
                    <a key={href} href={href} className={`nav__dd-card ${hash === href ? 'is-active' : ''}`}>
                      <span className="nav__dd-icon"><Icon /></span>
                      <div className="nav__dd-info">
                        <strong>{label}</strong>
                        <span>{desc}</span>
                      </div>
                      <ArrowRight className="nav__dd-go" size={15} />
                    </a>
                  ))}
                </div>
                <div className="nav__dd-footer">
                  <span>Need emergency pest treatment?</span>
                  <a href="#book" className="nav__dd-cta">Book Free Inspection <ArrowRight size={13} /></a>
                </div>
              </div>
            </div>

            <a href="#bird-netting" className={`nav__item ${hash === '#bird-netting' ? 'is-active' : ''}`}>
              Bird Netting
            </a>


            <a href="#contact" className={`nav__item ${hash === '#contact' ? 'is-active' : ''}`}>
              Contact
            </a>
          </nav>

          <div className="nav__actions">
            <a href="tel:+919003328229" className="nav__phone" aria-label="Call Tescare helpline">
              <span className="nav__phone-icon"><Phone /></span>
              <div className="nav__phone-text">
                <span className="nav__phone-sub">24/7 Helpline</span>
                <strong>+91 90033 28229</strong>
              </div>
            </a>

            <button
              type="button"
              className="btn btn--primary nav__cta"
              onClick={() => navigate('#book')}
            >
              Book Inspection
            </button>

            <button
              type="button"
              className="nav__burger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="nav__mobile-inner">
              <div className="nav__m-links">
                <a href="#home" className={`nav__m-link ${isHome ? 'is-active' : ''}`}>
                  Home
                </a>
                <a href="#about" className={`nav__m-link ${hash === '#about' ? 'is-active' : ''}`}>
                  About
                </a>

                <button
                  type="button"
                  className={`nav__m-link nav__m-toggle ${pestActive ? 'is-active' : ''}`}
                  onClick={() => setPestOpen((v) => !v)}
                  aria-expanded={pestOpen}
                >
                  <span>Pest Control Services</span>
                  <ChevronDown className={`nav__m-arrow ${pestOpen ? 'rot' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {pestOpen && (
                    <motion.div
                      className="nav__m-sub"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                    >
                      {PEST_LINKS.map(({ href, label, icon: Icon, desc }) => (
                        <a key={href} href={href} className={`nav__m-sublink ${hash === href ? 'is-active' : ''}`}>
                          <Icon />
                          <div>
                            <strong>{label}</strong>
                            <span>{desc}</span>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <a href="#bird-netting" className={`nav__m-link ${hash === '#bird-netting' ? 'is-active' : ''}`}>
                  Bird Netting
                </a>


                <a href="#contact" className={`nav__m-link ${hash === '#contact' ? 'is-active' : ''}`}>
                  Contact
                </a>
              </div>

              <div className="nav__m-actions">
                <button
                  type="button"
                  className="btn btn--primary btn--block btn--lg"
                  onClick={() => navigate('#book')}
                >
                  Book Free Inspection
                </button>
                <div className="nav__m-contact-grid">
                  <a href="tel:+919003328229" className="btn btn--white btn--block">
                    <Phone size={17} /> +91 90033 28229
                  </a>
                  <a
                    href="https://wa.me/919150044725"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--dark btn--block"
                  >
                    <MessageCircle size={17} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
