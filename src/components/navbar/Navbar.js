import React from 'react';
import NavLinks from './NavLinks';
import LanguageToggle from './LanguageToggle';
import HamburgerMenu from './HamburgerMenu';
import MyLogo from '../../images/MyLogo.png';
import { motion } from 'framer-motion';
import CV from '../../data/Selin_Çifci_Resume_.pdf';

const Navbar = ({ nav, handleNav, language, onLanguageChange, isVisible, showLogoTransition }) => {
  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="nav-container">
        <div className="nav-logo">
          {showLogoTransition && (
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ cursor: 'pointer' }}
            >
              <motion.img
                src={MyLogo}
                alt="MyLogo"
                style={{ height: '40px' }}
                layoutId="main-logo"
              />
            </motion.a>
          )}
        </div>
        <NavLinks nav={nav} handleNav={handleNav} language={language} />
        <div className="nav-right">
          <div className="nav-controls">
            <a 
              href={CV} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cv-button cv-desktop"
              aria-label="CV"
            >
              CV
              <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '6px' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </span>
            </a>
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
            <HamburgerMenu nav={nav} handleNav={handleNav} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
