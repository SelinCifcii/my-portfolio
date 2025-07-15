import React from 'react';
import { translations } from '../../data/translations';
import CV from '../../data/Selin_Çifci_Resume_.pdf';

const NavLinks = ({ nav, handleNav, language }) => {
  const t = translations[language] || translations.tr;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    if (nav) {
      handleNav();
    }
  };

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
      <a onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>{t.nav.about}</a>
      <a onClick={() => scrollToSection('skills')} style={{ cursor: 'pointer' }}>{t.nav.skills}</a>
      <a onClick={() => scrollToSection('experience')} style={{ cursor: 'pointer' }}>{t.nav.experience}</a>
      <a onClick={() => scrollToSection('works')} style={{ cursor: 'pointer' }}>{t.nav.projects}</a>
      <a onClick={() => scrollToSection('achievements')} style={{ cursor: 'pointer' }}>{t.nav.achievements}</a>
      <a onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>{t.nav.contact}</a>
      <div className="nav-footer">
        <p>&copy; 2024 Designed & Built by <a href="https://github.com/SelinCifcii" target="_blank" rel="noopener noreferrer" className="nav-footer-link">Selin Çifci</a></p>
      </div>
    </div>
  );
};

export default NavLinks;
