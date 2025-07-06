import React from 'react';
import { translations } from '../../data/translations';
import CV from '../../data/Selin_Çifci_Resume_.pdf';

const NavLinks = ({ nav, handleNav, language }) => {
  const t = translations[language] || translations.tr;

  return (
    <div className={`nav-links ${nav ? 'nav-active' : ''}`}>
      <a 
        href={CV} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="cv-button cv-mobile"
        aria-label="CV"
        style={{ marginBottom: '1.5rem' }}
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
      <a href="#about" onClick={handleNav}>{t.nav.about}</a>
      <a href="#skills" onClick={handleNav}>{t.nav.skills}</a>
      <a href="#experience" onClick={handleNav}>{t.nav.experience}</a>
      <a href="#works" onClick={handleNav}>{t.nav.projects}</a>
      <a href="#achievements" onClick={handleNav}>{t.nav.achievements}</a>
      <a href="#contact" onClick={handleNav}>{t.nav.contact}</a>
      <div className="nav-footer">
        <p>&copy; 2024 Designed & Built by <a href="https://github.com/SelinCifcii" target="_blank" rel="noopener noreferrer" className="nav-footer-link">Selin Çifci</a></p>
      </div>
    </div>
  );
};

export default NavLinks;
