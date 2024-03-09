import React from 'react';
import coralReef from '../Images/coral_reef_workshop.jpg';
import './EventsDetail.css';
import { useNavigate } from 'react-router-dom';

function CoralReefDetail() {
  let navigate = useNavigate();


  const eventDetails = {
    title: "Eco-friendly Sailing Adventure",
    location: "Cape Cod, MA",
    date: "Saturday, Nov 7, 1:00 PM EST",
    price: "$50 per person",
    overview: "Join us for an unforgettable eco-friendly sailing adventure around the beautiful waters of Cape Cod. This experience not only offers you the chance to learn sailing from experienced skippers but also educates you on marine conservation efforts. You'll get hands-on experience with eco-friendly sailing practices, understand the importance of preserving marine biodiversity, and enjoy bird-watching.",
    highlights: [
      "Hands-on sailing experience with an eco-friendly vessel.",
      "Learn about marine conservation from our knowledgeable guides.",
      "Enjoy the scenic beauty of Cape Cod's coastline.",
      "Bird-watching opportunities.",
      "Contribute to ocean conservation efforts."
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

export default CoralReefDetail;