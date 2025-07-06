import React from 'react';

const LanguageToggle = ({ language, onLanguageChange }) => {
  return (
    <div className="language-toggle">
      <button
        className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
        onClick={() => onLanguageChange('tr')}
      >
        TR
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => onLanguageChange('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle; 