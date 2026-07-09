import React from 'react';
import logo from './assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="#home">
          <img src={logo} alt="Tescare Logo" className="logo-img" />
        </a>
      </div>
      
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#bird-netting">Bird Netting</a></li>
        <li className="nav-dropdown">
          <a href="#home" className="dropdown-trigger">
            Pest Control
            <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#bedbug-control">
                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M12 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM6 7.5L4 6M18 7.5L20 6M5 12H3M21 12h-2M6 16.5L4 18M18 16.5L20 18" />
                </svg>
                <span>Bedbug Control</span>
              </a>
            </li>
            <li>
              <a href="#cockroach-control">
                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 6a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V9a3 3 0 0 0-3-3z" />
                  <path d="M12 3a6 6 0 0 0-6 6M12 3a6 6 0 0 1 6 6M6 12H4M20 12h-2M7 16l-2 1M17 16l2 1" />
                </svg>
                <span>Cockroach Control</span>
              </a>
            </li>
            <li>
              <a href="#mosquito-control">
                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M8 8C5.5 8 4 9.5 4 11s1.5 3 4 3M16 8c2.5 0 4 1.5 4 3s-1.5 3-4 3M12 18v3" />
                </svg>
                <span>Mosquito Control</span>
              </a>
            </li>
            <li>
              <a href="#rodent-control">
                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v8M9 11l3-3 3 3" />
                </svg>
                <span>Rodent Control</span>
              </a>
            </li>
            <li>
              <a href="#termite-control">
                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10h18M3 14h18M3 18h18M12 2v20" />
                </svg>
                <span>Termite Control</span>
              </a>
            </li>
            <li>
              <a href="#woodborer-control">
                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M12 12h.01" />
                </svg>
                <span>Wood Borer Control</span>
              </a>
            </li>
          </ul>
        </li>
        <li><a href="#offers">Offers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <button onClick={() => window.location.hash = '#book'} className="btn-primary">Book Inspection</button>
    </nav>
  );
};

export default Navbar;
