import React, { useState, useEffect } from 'react';
import './Event.css';

const fetchEventsNearLocation = async () => {
  return [
    {
      id: 1,
      title: "Ocean Cleaning",
      location: "Bellmore, NY",
      price: "Free",
      image: ".\Images\overfish.jpeg",
      details: "Grand Central Terminal, Sat, Sep 19, 10:00 AM EDT",
      description: "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening more...",
    },

    {
      id: 2,
      title: "Ocean Cleaning",
      location: "Bellmore, NY",
      price: "Free",
      image: ".\Images\overfish.jpeg",
      details: "Grand Central Terminal, Sat, Sep 19, 10:00 AM EDT",
      description: "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening more...",
    },
    {
      id: 3,
      title: "Ocean Cleaning",
      location: "Bellmore, NY",
      price: "Free",
      image: ".\Images\overfish.jpeg",
      details: "Grand Central Terminal, Sat, Sep 19, 10:00 AM EDT",
      description: "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening more...",
    },
    {
      id: 4,
      title: "Ocean Cleaning",
      location: "Bellmore, NY",
      price: "Free",
      image: ".\Images\overfish.jpeg",
      details: "Grand Central Terminal, Sat, Sep 19, 10:00 AM EDT",
      description: "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening more...",
    },
    {
      id: 5,
      title: "Ocean Cleaning",
      location: "Bellmore, NY",
      price: "Free",
      image: ".\Images\overfish.jpeg",
      details: "Grand Central Terminal, Sat, Sep 19, 10:00 AM EDT",
      description: "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening more...",
    },
    {
      id: 6,
      title: "Ocean Cleaning",
      location: "Bellmore, NY",
      price: "Free",
      image: ".\Images\overfish.jpeg",
      details: "Grand Central Terminal, Sat, Sep 19, 10:00 AM EDT",
      description: "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening more...",
    },
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
            <button className="action">Book it</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
