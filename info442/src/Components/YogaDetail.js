import React from 'react';
import coralReef from '../Images/yoga.jpg';
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
    <div className='body'>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1 className='header'>{eventDetails.title}</h1>
      <img className='image' src={coralReef} alt={eventDetails.title} />
      <h2>Overview</h2>
      <p className='overview'>{eventDetails.overview}</p>
      <h3>Event Details</h3>
      <p>Location: {eventDetails.location}</p>
      <p>Date and Time: {eventDetails.date}</p>
      <p>Price: {eventDetails.price}</p>
      <h3>Highlights</h3>
      <ul>
        {eventDetails.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
}

export default YogaDetail;