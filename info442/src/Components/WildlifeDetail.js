import React from 'react';
import wildlife from '../Images/wildlife.jpg';
import './EventsDetail.css';
import { useNavigate } from 'react-router-dom';

function WildlifeDetail() {
    let navigate = useNavigate();
  
    const eventDetails = {
      title: "Marine Wildlife Photography Exhibit",
      location: "San Francisco, CA",
      date: "Thursday, Nov 12, 6:00 PM PST",
      price: "$15 per person",
      overview: "Experience the beauty of marine life through the lens of renowned photographers. This exhibit showcases stunning images of underwater creatures and their habitats, revealing the hidden wonders of the ocean.",
      highlights: [
        "Exclusive photography from acclaimed marine photographers.",
        "Insights into the techniques used to capture underwater images.",
        "Stories behind the photographs and their significance for marine conservation.",
        "Interactive sessions with photographers and marine biologists.",
        "Portion of proceeds donated to marine wildlife protection initiatives."
      ]
    };

  return (
    <div className='body'>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1 className='header'>{eventDetails.title}</h1>
      <img className='image' src={wildlife} alt={eventDetails.title} />
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

export default WildlifeDetail;