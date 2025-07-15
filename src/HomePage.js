import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import Navbar from './components/navbar/Navbar';
import SocialSidebar from './components/SocialSidebar';

const HomePage = ({ showLogoTransition }) => {
  // States
  const [nav, setNav] = useState(false);
  const [language, setLanguage] = useState('tr'); // Default to Turkish
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNav = () =>{
    const newNavState = !nav;
    setNav(newNavState);
    
    if (newNavState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  const closeNav = () =>{
   if(nav){
     setNav(false);
     document.body.style.overflow = 'unset';
   }
  }

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return(
    <div  className='pages'>
        <SocialSidebar />
        <Navbar 
          nav={nav} 
          handleNav={handleNav} 
          language={language}
          onLanguageChange={handleLanguageChange}
          isVisible={isNavbarVisible}
          showLogoTransition={showLogoTransition}
        />
        <Main 
          nav={nav} 
          closeNav={closeNav} 
          handleNav={handleNav}
          language={language}
        />
    </div>
  ) 
};

export default HomePage;
