import React, { useState, useEffect } from 'react';
import './Events.css'; // Assuming you have an Events.css file for styling

// Simulated fetch function. Replace this with actual data fetching logic.
const fetchEventsNearLocation = async () => {
  // Simulate fetching data
  return [
    {
      id: 1,
      title: "Bubbe's Book Club",
      location: "Bellmore, NY",
      price: "Free",
      image: "./images/img1.jpg",
      details: "Grand Central Terminal, Sat, Sep 19, 10:00 AM EDT",
      description: "Welcome! Everyone has a unique perspective after reading a book, and we would love you to share yours with us! We meet one Sunday evening more...",
    },
    // Add more events as needed
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
