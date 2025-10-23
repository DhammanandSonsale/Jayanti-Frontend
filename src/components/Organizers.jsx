import "../styles/Organizers.css"

function Organizers() {
  const organizers = [
    {
      id: 1,
      name: "Rahul Patil",
      designation: "Adhyaksh (President)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      contact: "rahulpatil@example.com",
    },
    {
      id: 2,
      name: "Sneha Deshmukh",
      designation: "Up-Adhyaksh (Vice President)",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      contact: "snehadeshmukh@example.com",
    },
    {
      id: 3,
      name: "Amit Pawar",
      designation: "Sachiv (Secretary)",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      contact: "amitpawar@example.com",
    },
    {
      id: 4,
      name: "Neha Shinde",
      designation: "Up-Sachiv (Joint Secretary)",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      contact: "nehashinde@example.com",
    },
    {
      id: 5,
      name: "Pravin Jadhav",
      designation: "Koshadhyaksh (Treasurer)",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop",
      contact: "pravin@example.com",
    },
    {
      id: 6,
      name: "Pooja Kale",
      designation: "Mahila Pramukh (Women’s Head)",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop",
      contact: "pooja@example.com",
    },
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
