import React from 'react';
import yoga from '../Images/yoga.jpg';
import './EventsDetail.css';
import { useNavigate } from 'react-router-dom';

function YogaDetail() {
    let navigate = useNavigate();
  
    const eventDetails = {
      title: "Seaside Yoga for Conservation",
      location: "Malibu, CA",
      date: "Sunday, Oct 11, 7:30 AM PDT",
      price: "Donation-based",
      overview: "Start your day with serenity by the sea. Our seaside yoga sessions are designed to provide relaxation and rejuvenation, supporting local marine cleanup projects and promoting mindfulness in tourism.",
      highlights: [
        "Morning yoga session overlooking the ocean.",
        "Professional instructors leading classes suitable for all levels.",
        "Opportunity to connect with nature and community.",
        "All donations contribute to local marine conservation efforts.",
        "No prior experience required; come as you are!"
      ]
    };
  
    return (
      <div className='event-detail-container'>
        <button onClick={() => navigate(-1)} className="back-button">Back</button>
        <h1 className='event-detail-title'>{eventDetails.title}</h1>
        <img className='event-detail-image' src={yoga} alt="Seaside Yoga" />
        <div className='event-detail-overview'>
          <h2>Overview</h2>
          <p>{eventDetails.overview}</p>
        </div>
        <div className='event-detail-info'>
          <p><strong>Location:</strong> {eventDetails.location}</p>
          <p><strong>Date and Time:</strong> {eventDetails.date}</p>
          <p><strong>Price:</strong> {eventDetails.price}</p>
        </div>
        <div className='event-detail-highlights'>
          <h3>Highlights</h3>
          <ul>
            {eventDetails.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default YogaDetail;