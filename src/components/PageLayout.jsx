import React, { useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';

/**
 * PageLayout — shared shell for every page: navbar, content, footer,
 * floating mobile quick actions and scroll-to-top on route change.
 */
const PageLayout = ({ children, className = '', footerCta = true }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`page ${className}`}>
      <Navbar />
      <main>{children}</main>
      <Footer cta={footerCta} />
      
      {/* Floating Action Buttons for Mobile / Quick Access */}
      <div className="float-actions" aria-label="Quick contact actions">
        <a
          href="https://wa.me/919150044725"
          target="_blank"
          rel="noreferrer"
          className="float-btn float-btn--wa"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} />
          <span className="float-btn__text">WhatsApp</span>
        </a>
        <a
          href="tel:+919003328229"
          className="float-btn float-btn--call"
          aria-label="Call Tescare helpline"
        >
          <Phone size={19} />
          <span className="float-btn__text">Call Now</span>
        </a>
      </div>
    </div>
  );
};

export default PageLayout;
