import React from 'react'
import './ResourceCard.css'

function ResourceCard({ title, description, imageLocation }) {
  return (
    <div className="resource-card">
        <img src={imageLocation} alt={title} style={{ width: '200px', height: '150px' }} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  );
}

export default ResourceCard;