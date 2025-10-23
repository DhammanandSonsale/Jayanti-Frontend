"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/AdminLogin.css"
import dotenv from "dotenv"

function AdminLogin() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    // If already logged in, go to dashboard
    if (localStorage.getItem("isAdmin") === "true") {
      navigate("/admin")
    }
  }, [navigate])

  const handleLogin = (e) => {
    e.preventDefault()

    // ✅ Set your admin credentials here
    const ADMIN_ID = Process.env.ADMIN_NAME;
    const ADMIN_PASS = Process.env.ADMIN_PASSWORD;

    if (userId === ADMIN_ID && password === ADMIN_PASS) {
      localStorage.setItem("isAdmin", "true")
      navigate("/admin")
    } else {
      setError("Invalid ID or password")
    }
  }

  return (
    <div className="admin-login">
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Admin ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default AdminLogin
