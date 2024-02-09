import React from 'react'
import './ResourceCard.css'

function ResourceCard({ title, description, imageLocation }) {
  return (
    <div className="resource-card">
      <div className="flip-card-inner">
        <div className="card-front">
          <img src={imageLocation} alt={title} style={{ width: '300px', height: '200px' }} />
          <h2>{title}</h2>
        </div>
        <div className="card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ResourceCard;