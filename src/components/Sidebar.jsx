"use client"
import { Link, useNavigate } from "react-router-dom"
import "../styles/Sidebar.css"

function Sidebar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("isAdmin")
    navigate("/admin-login")
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <button 
      className="logout-btn" 
      onClick={handleLogout}>
        🚪 Logout
      </button>

      
    </aside>
  )
}

export default Sidebar
