import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../data/translations';

const WorkCard = ({ project, language = 'tr' }) => {
  const navigate = useNavigate();
  const t = translations[language] || translations.tr;

  const handleProjectClick = (projectTitle) => {
    const encodedTitle = encodeURIComponent(projectTitle);
    navigate(`/project/${encodedTitle}`);
  };

  const handleCardClick = (e) => {
    // Prevent navigation if clicking on the button or its children
    if (e.target.closest('.work-link')) {
      return;
    }
    handleProjectClick(project.title);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent card click when button is clicked
    handleProjectClick(project.title);
  };

  return (
    <div className="work-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="work-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="work-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="work-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <button 
          onClick={handleButtonClick}
          className="work-link"
        >
          {t.works.viewProject}
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
