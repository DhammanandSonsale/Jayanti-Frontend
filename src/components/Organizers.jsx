import "../styles/Organizers.css"

function Organizers() {
  const organizers = [
    {
      id: 1,
      name: "abhi",
      designation: "Adhyaksh (President)",
      image: "/assets/profile.png",
      contact: "abhi.sonsale@example.com",
    },
    {
      id: 2,
      name: "sumo",
      designation: "Up-Adhyaksh (Vice President)",
      image: "/assets/profile.png",
      contact: "lakhan.sonsale@example.com",
    },
    {
      id: 3,
      name: "Amit",
      designation: "Sachiv (Secretary)",
      image: "/assets/profile.png",
      contact: "amitpawar@example.com",
    },
    {
      id: 4,
      name: "kiran",
      designation: "Up-Sachiv (Joint Secretary)",
      image: "/assets/profile.png",
      contact: "nehashinde@example.com",
    }
  ]

  return (
    <section className="organizers">
      <div className="organizers-container">
        <h2>Our Organizers – Nagvansh Mitra Mandal</h2>
        <div className="organizers-grid">
          {organizers.map((org) => (
            <div key={org.id} className="organizer-card">
              <img
                src={org.image || "/placeholder.svg"}
                alt={org.name}
                className="organizer-image"
              />
              <h3>{org.name}</h3>
              <p className="designation">{org.designation}</p>
              <a href={`mailto:${org.contact}`} className="contact-link">
                ✉ {org.contact}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Organizers
