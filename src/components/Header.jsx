import { NavLink } from "react-router-dom"
import "../styles/Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <NavLink to="/">
          <div className="logo">
            <img src="/assets/logo.png" alt="Logo" className="logo-image" height={"52px"}/>
          </div>
        </NavLink>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>


           {/* <NavLink
            to="/event"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Events
          </NavLink> */}


          
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Dashboard
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
