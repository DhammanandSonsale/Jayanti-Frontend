import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AdminDashboard from "./pages/AdminDashboard"
import Dashboard from "./pages/Dashboard"
import Events from "./pages/Events"
import AdminLogin from "./pages/AdminLogin"

import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
