import React, { useState, useEffect } from "react";
import "../styles/Event.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function EventPage() {
  const [events, setEvents] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "Dr. B.R. Ambedkar Jayanti Celebration",
        date: "2025-04-14",
        description:
          "A community gathering to celebrate social justice and equality.",
        image: "/assets/saheb.jpeg",
      },
      {
        id: 2,
        title: "Village Annual Sports Day",
        date: "2025-05-10",
        description: "Fun sports and games for everyone in the village.",
        image: "/assets/saheb2.jpeg",
      },
      {
        id: 3,
        title: "Cultural Fest",
        date: "2025-06-20",
        description:
          "Dance, music, and traditional performances from local artists.",
        image: "/assets/koregaon.jpeg",
      },
    ];
    setEvents(data);
  }, []);

  // Auto slide every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [events]);

  return (
    <>
      <Header />
      <div className="event-page">
        {/* Hero Section */}
        <div className="hero-section">
          {events.length > 0 && (
            <div className="hero-slide">
              <img
                src={events[currentSlide].image}
                alt={events[currentSlide].title}
              />
              <div className="hero-text">
                <h2>{events[currentSlide].title}</h2>
                <p>{events[currentSlide].description}</p>
                <span>{new Date(events[currentSlide].date).toLocaleDateString()}</span>
              </div>
            </div>
          )}
        </div>

        {/* Events Section */}
        <h1 className="page-title">Village Events</h1>
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-content">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-date">{new Date(event.date).toLocaleDateString()}</p>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventPage;
