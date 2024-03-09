import React from 'react';
import fishing from '../Images/fishing.jpg';
import './EventsDetail.css';
import { useNavigate } from 'react-router-dom';

function FishingDetail() {
  let navigate = useNavigate();

  const eventDetails = {
    title: "Sustainable Fishing Seminar",
    location: "Monterey, CA",
    date: "Friday, Oct 16, 2:00 PM PDT",
    price: "$20 per person",
    overview: "Engage with experts on sustainable fishing and responsible seafood consumption during our seminar at Monterey Bay Aquarium. Discover how to enjoy seafood while ensuring the longevity of marine life.",
    highlights: [
      "In-depth discussions on sustainable fishing practices.",
      "Interactive session with marine experts and local fishermen.",
      "Learn about the impact of fishing on marine ecosystems.",
      "Guidance on selecting sustainable seafood.",
      "Contribute to marine conservation efforts through informed choices."
    ]
  };

  return (
    <div className='body'>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1 className='header'>{eventDetails.title}</h1>
      <img className='image' src={fishing} alt={eventDetails.title} />
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

export default FishingDetail;