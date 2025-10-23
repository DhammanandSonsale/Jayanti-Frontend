"use client"

import { useState, useEffect } from "react"
import "../styles/Dashboard.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Dashboard() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      const response = await fetch("https://jayanti-backend.vercel.app/api/members")
      const data = await response.json()
      setMembers(data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching members:", error)
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <div className="dashboard">
        {/* Left Side: Organization Details & QR */}
        <div className="dashboard-left">
          <div className="organization-details">
            <h2>Nagvansh Mitra Mandal</h2>
            <p>Celebrating Dr. B.R. Ambedkar Jayanti</p>
            <p>Contact: +91 83085 60358</p>
          </div>
          <div className="qr-code">
            <h3>Scan to Pay</h3>
            <br />
            <img src="/assets/qr.svg" alt="QR Code" />
          </div>
        </div>

        {/* Right Side: Paid Members Table */}
        <div className="dashboard-right">
          <div className="table-container">
          <h1>Paid Members</h1>
          {loading ? (
            <p className="loading">Loading members...</p>
          ) : (
            <table className="members-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount Paid</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {members.map(member => (
                  <tr key={member._id}>
                    <td>{member.name}</td>
                    <td>₹ {member.amount}</td>
                    <td>{new Date(member.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
