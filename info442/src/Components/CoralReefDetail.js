import React from 'react';
import './ResourcePages.css';
import coralReefImage from '../Images/coral_reef_workshop.jpg'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

function CoralReefDetail() {
  let navigate = useNavigate();

  return (
    <div className='event-detail-container'>
      <button onClick={() => navigate(-1)}>Back to Events</button>
      <h1>Coral Reef Restoration Workshop</h1>
      <img src={coralReefImage} alt="Coral Reef Restoration" />
      <p>Join our workshop in Key West, FL, and contribute to coral transplantation efforts to revitalize our reefs.</p>
      {/*  */}
    </div>
  );
}

export default CoralReefDetail;