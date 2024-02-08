import React from 'react'
import './ResourceCard.css'

function ResourceCard({ title, description }) {
  return (
    <div className="resource-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ResourceCard;