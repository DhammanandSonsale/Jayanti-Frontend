import "../styles/EventInfo.css"

function EventInfo() {
  return (
    <section className="event-info">
      <div className="event-info-container">
        <h2>Event Details</h2>
        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">📅</div>
            <h3>Date</h3>
            <p>April 14, 2025</p>
          </div>
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Venue</h3>
            <p>Osmannagar Buddha Vihar</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🎯</div>
            <h3>Theme</h3>
            <p>Equality, Education, and Empowerment</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventInfo
