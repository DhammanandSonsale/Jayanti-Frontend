import Header from "../components/Header"
import Hero from "../components/Hero"
import EventInfo from "../components/EventInfo"
import Organizers from "../components/Organizers"
import Footer from "../components/Footer"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <EventInfo />
      <Organizers />
      <Footer />
    </div>
  )
}

export default Home
