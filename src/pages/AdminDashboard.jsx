"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import MembersTable from "../components/MembersTable"
import AddMemberModal from "../components/AddMemberModal"
import "../styles/AdminDashboard.css"

function Dashboard() {
  const navigate = useNavigate()
  const [authorized, setAuthorized] = useState(false)
  const [members, setMembers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // ✅ Check if admin is logged in
    const isAdmin = localStorage.getItem("isAdmin")
    if (isAdmin !== "true") {
      navigate("/admin-login") // redirect to login if not authorized
    } else {
      setAuthorized(true)
      fetchMembers()
    }
  }, [navigate])

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

  const handleAddMember = async (memberData) => {
    try {
      const response = await fetch("https://jayanti-backend.vercel.app/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(memberData),
      })
      const newMember = await response.json()
      setMembers([newMember, ...members])
      setShowModal(false)
    } catch (error) {
      console.error("Error adding member:", error)
    }
  }

const handleDeleteMember = async (id) => {
  const confirmDelete = window.confirm(
    "⚠️ Are you sure you want to delete this member? This action cannot be undone."
  );
  
  if (!confirmDelete) return; // Cancel pressed, do nothing

  try {
    await fetch(`https://jayanti-backend.vercel.app/api/members/${id}`, {
      method: "DELETE",
    });
    setMembers(members.filter((member) => member._id !== id));
  } catch (error) {
    console.error("Error deleting member:", error);
  }
};


  if (!authorized) return <p>Checking admin access...</p>

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Paid Members Information</h1>


          {/* <button
            className="btn-logout"
            onClick={() => {
              localStorage.removeItem("isAdmin")
              navigate("/admin-login")
            }}
          >
            Logout
          </button> */}



          <button className="btn-add-member" onClick={() => setShowModal(true)}>
            + Add New Member
          </button>
        </div>

        {loading ? (
          <p className="loading">Loading members...</p>
        ) : (
          <MembersTable members={members} onDelete={handleDeleteMember} />
        )}

        {showModal && (
          <AddMemberModal
            onClose={() => setShowModal(false)}
            onAdd={handleAddMember}
          />
        )}
      </div>
    </div>
  )
}

export default Dashboard
