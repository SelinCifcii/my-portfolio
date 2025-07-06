import React from 'react';
import { useNavigate } from 'react-router-dom';

const AchievementCard = ({ data }) => {
  const navigate = useNavigate();

  const handleBadgeClick = (e) => {
    e.stopPropagation();
    if (data.path) {
      navigate(data.path);
    }
  };

  return (
    <div className="achievement-card">
      <div className="achievement-content">
        {data.date && (
          <span className="achievement-date">
            {data.date}
          </span>
        )}
        <div className="achievement-image-container">
          <img
            src={data.image}
            alt={data.title + " image"}
            className="achievement-image"
            loading="lazy"
          />
        </div>
        <div className="achievement-details">
          <h3 className="achievement-title">
            {data.title}
          </h3>
          {data.description && (
            <p className="achievement-description">
              {data.description}
            </p>
          )}
          {data.badge &&
            (data.path ? (
              <button
                onClick={handleBadgeClick}
                className="achievement-badge-button"
              >
                {data.badge}
              </button>
            ) : (
              <span className="achievement-badge">
                {data.badge}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard; 