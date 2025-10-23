"use client"
import "../styles/MembersTable.css"

function MembersTable({ members, onDelete }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="table-container">
      <table className="members-table">
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Payment Amount (₹)</th>
            <th>Date Paid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.length > 0 ? (
            members.map((member) => (
              <tr key={member._id}>
                <td>{member.name}</td>
                <td>₹{member.amount.toLocaleString("en-IN")}</td>
                <td>{formatDate(member.datePaid)}</td>
                <td>
                  <button className="btn-delete" onClick={() => onDelete(member._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-data">
                No members found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MembersTable
