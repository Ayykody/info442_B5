import React, { useState, useEffect } from 'react';
import './Event.css';
import coralReef from '../Images/coral_reef_workshop.jpg';
import yoga from '../Images/yoga.jpg';
import fishing from '../Images/fishing.jpg';
import clean from '../Images/clean.jpg';
import sailing from '../Images/sailing.jpg';
import wildlife from '../Images/wildlife.jpg';
import { Link } from 'react-router-dom';

const fetchEventsNearLocation = async () => {
  return [
    {
      id: 1,
      title: "Coral Reef Restoration Workshop",
      location: "Key West, FL",
      price: "Free with registration",
      image: coralReef,
      details: "Coral Palms Beach, Sat, Oct 3, 9:00 AM EDT",
      description: "Join our hands-on workshop and contribute to coral transplantation efforts to revitalize our reefs. Learn from marine biologists about sustaining marine biodiversity.",
    },
    {
      id: 2,
      title: "Seaside Yoga for Conservation",
      location: "Malibu, CA",
      price: "Donation-based",
      image: yoga,
      details: "Zuma Beach, Sun, Oct 11, 7:30 AM PDT",
      description: "Start your morning with a yoga session by the sea. Donations support local marine cleanup projects and promote mindfulness in tourism.",
    },
    {
      id: 3,
      title: "Sustainable Fishing Seminar",
      location: "Monterey, CA",
      price: "$20 per person",
      image: fishing,
      details: "Monterey Bay Aquarium, Fri, Oct 16, 2:00 PM PDT",
      description: "Learn about sustainable fishing practices and how to enjoy seafood responsibly without disrupting marine ecosystems.",
    },
    {
      id: 4,
      title: "Beach Cleanup and BBQ",
      location: "Virginia Beach, VA",
      price: "Free, food for purchase",
      image: clean,
      details: "Chesapeake Bay, Sun, Oct 25, 11:00 AM EDT",
      description: "Join our beach cleanup effort followed by a community BBQ. Meet local conservationists and enjoy the pristine coast.",
    },
    {
      id: 5,
      title: "Eco-friendly Sailing Adventure",
      location: "Cape Cod, MA",
      price: "$50 per person",
      image: sailing,
      details: "Cape Cod Harbor, Sat, Nov 7, 1:00 PM EST",
      description: "Set sail with us on an eco-friendly vessel. Learn about marine life, enjoy bird-watching, and discover the importance of ocean conservation.",
    },
    {
      id: 6,
      title: "Marine Wildlife Photography Exhibit",
      location: "San Francisco, CA",
      price: "$15 per person",
      image: wildlife,
      details: "Ocean Art Gallery, Thu, Nov 12, 6:00 PM PST",
      description: "Explore stunning photography from the deep sea and learn about the species captured in these images. Proceeds go towards marine wildlife protection initiatives.",
    }
  ];
};

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const eventsData = await fetchEventsNearLocation();
      setEvents(eventsData);
    };

    loadEvents();
  }, []);

  return (
    <div className="container">
      {events.map((event) => (
        <div key={event.id} className="item-container">
          <div className="img-container">
            <img src={event.image} alt="Event" />
          </div>
          <div className="body-container">
            <div className="overlay"></div>
            <div className="event-info">
              <p className="title">{event.title}</p>
              <div className="separator"></div>
              <p className="info">{event.location}</p>
              <p className="price">{event.price}</p>
              <div className="additional-info">
                <p className="info description">{event.description}</p>
              </div>
            </div>
            <Link to={`/Events/Sailing`} className="action-link">
              <button className="action">Book it</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
