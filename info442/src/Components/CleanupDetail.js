import React from 'react';
import clean from '../Images/clean.jpg';
import './EventsDetail.css';
import { useNavigate } from 'react-router-dom';

function CleanupDetail() {
    let navigate = useNavigate();
  
    const eventDetails = {
      title: "Beach Cleanup and BBQ",
      location: "Virginia Beach, VA",
      date: "Sunday, Oct 25, 11:00 AM EDT",
      price: "Free, food for purchase",
      overview: "Join our community effort to clean up Chesapeake Bay. Your participation not only helps to keep our beaches clean but also contributes to preserving the local marine ecosystem. After the cleanup, celebrate your hard work with a community BBQ by the shore.",
      highlights: [
        "Community beach cleanup with local conservationists.",
        "Help remove trash and debris from Chesapeake Bay.",
        "BBQ with local flavors available for purchase after the event.",
        "Meet other members of the community who care about the environment.",
        "All cleanup materials will be provided."
      ]
    };
  

  return (
    <div className='body'>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1 className='header'>{eventDetails.title}</h1>
      <img className='image' src={clean} alt={eventDetails.title} />
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

export default CleanupDetail;