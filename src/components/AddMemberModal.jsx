"use client"

import { useState } from "react"
import "../styles/AddMemberModal.css"

function AddMemberModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    datePaid: new Date().toISOString().split("T")[0],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.amount) {
      onAdd({
        ...formData,
        amount: Number.parseFloat(formData.amount),
        datePaid: new Date(formData.datePaid),
      })
      setFormData({ name: "", amount: "", datePaid: new Date().toISOString().split("T")[0] })
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Member</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="name">Member Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter member name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Payment Amount (₹)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="datePaid">Date Paid</label>
            <input
              type="date"
              id="datePaid"
              name="datePaid"
              value={formData.datePaid}
              onChange={handleChange}
              required
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Add Member
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMemberModal
