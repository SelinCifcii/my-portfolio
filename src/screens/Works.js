import React from 'react';
import WorkCard from './WorkCard';
import { translations } from '../data/translations';

const Works = ({ language = 'tr' }) => {
  const t = translations[language] || translations.tr;
  
  const projects = [
    {
      title: t.works.projects[0].title,
      description: t.works.projects[0].description,
      image: require('../images/teamManagementSystemPhoto.png'),
      technologies: ['React', 'CSS3', 'JavaScript'],
      link: '#'
    },
    {
      title: t.works.projects[1].title,
      description: t.works.projects[1].description,
      image: require('../images/flowPassPhoto.png'),
      technologies: ['React', 'LocalStorage', 'CSS3'],
      link: '#'
    },
    {
      title: t.works.projects[2].title,
      description: t.works.projects[2].description,
      image: require('../images/routeaiPhoto.png'),
      technologies: ['React Native', 'Expo', 'Firebase', 'Gemini AI', 'React Navigation'],
      link: '#'
    },
    {
      title: t.works.projects[3].title,
      description: t.works.projects[3].description,
      image: require('../images/mipsAssemblyPhoto.png'),
      technologies: ['React', 'LocalStorage', 'CSS3'],
      link: '#'
    }
  ];

  return (
    <section id="works" className="works">
      <div className="container">
        <h2>{t.works.title}</h2>
        <div className="works-content">
          <div className="works-grid">
            {projects.map((project, index) => (
              <WorkCard key={index} project={project} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
