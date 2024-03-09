import React from 'react';
import coralReef from '../Images/coral_reef_workshop.jpg';
import './EventsDetail.css';
import { useNavigate } from 'react-router-dom';

function CoralReefDetail() {
  let navigate = useNavigate();


  const eventDetails = {
    title: "Coral Reef Restoration Workshop",
    location: "Key West, FL",
    date: "Saturday, Oct 3, 9:00 AM EDT",
    price: "Free with registration",
    overview: "Join our hands-on workshop at Coral Palms Beach and contribute to coral transplantation efforts to revitalize our reefs. Learn from marine biologists about how to sustain marine biodiversity and what you can do to help protect these vital ecosystems.",
    highlights: [
      "Participate in actual coral transplantation activities.",
      "Engage in discussions about coral ecology and conservation strategies.",
      "Understand the challenges faced by coral reefs globally and locally.",
      "Snorkeling around the reef to observe the underwater world and newly transplanted corals.",
      "Meet and interact with fellow conservation enthusiasts and marine biologists."
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