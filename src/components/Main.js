import React from 'react';
import About from '../screens/About';
import Contact from '../screens/Contact';
import HeroSection from '../screens/HeroSection';
import Experience from '../screens/Experience';
import Skills from '../screens/Skills';
import Works from '../screens/Works';
import Achievements from '../screens/Achievements';
import Footer from './Footer';

const Main = ({nav, handleNav, closeNav, language}) => {
  return(
    <div onClick={closeNav } className='main'>
        <HeroSection nav={nav} handleNav={handleNav} language={language} />
        <About language={language} />
        <Skills language={language} />
        <Experience language={language} />
        <Works language={language} />
        <Achievements language={language} />
        <Contact language={language} />
        <Footer />
    </div>
  )
};

export default Main; 