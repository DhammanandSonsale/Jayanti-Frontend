import { Link } from "react-router-dom"
import "../styles/Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div> {/* Optional for gradient overlay */}
      <div className="hero-content">
        <h2>Dr. B.R. Ambedkar Jayanti 2025</h2>
        <p>Celebrating the Legacy of Social Justice and Equality</p>
         <Link to="/dashboard">
          <button className="hero-btn">Join the Celebration</button>
        </Link> 
      </div>
      <div className="hero-image">
        <img
          src="/assets/wallpaper.jpeg"
          alt="Dr. B.R. Ambedkar"
        />
      </div>
    </section>
  )
}

export default Hero
