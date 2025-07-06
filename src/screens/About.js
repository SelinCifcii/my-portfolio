import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfilePhotos from '../components/ProfilePhotos';
import { translations } from '../data/translations';

const About = ({ language = "en" }) => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  const t = translations[language] || translations.en;

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">{language === 'tr' ? 'Ben Kimim?' : 'Who I am'}</p>
                    <p className='heading-text'>{t.about.title}</p>
                  </motion.div>
                  
                  {/* Mobile-only ProfilePhotos */}
                  <motion.div 
                    initial={{x: '-100%', opacity: 0}} 
                    whileInView={horizontal} 
                    className='about-img mobile-only'
                  >
                      <ProfilePhotos />
                  </motion.div>
                  
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>{t.about.description}</p>
                        <br />
                        <p>{t.about.description2}</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img desktop-only'>
                        <ProfilePhotos />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
