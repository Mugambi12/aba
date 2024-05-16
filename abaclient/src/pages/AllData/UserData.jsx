import React from "react";

function UserData({
  usersData,
  handleShowDeleteModal,
  handleShowEditModal,
  handleShowViewModal,
}) {
  return (
    <div>
      <h2 className="table-title">Users Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Occupation</th>
            <th>Interests</th>
            <th>Registered At</th>
            <th>Last Login</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData &&
            usersData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.phone_number}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.country}</td>
                <td>{user.occupation}</td>
                <td>{user.interests.join(", ")}</td>
                <td>{user.registeredAt}</td>
                <td>{user.lastLogin}</td>
                <td>
                  <td
                    className="table-button"
                    onClick={() => handleShowViewModal("user", user.id)}
                  >
                    <span className="view-button">View</span>
                  </td>

                  <td
                    className="table-button"
                    onClick={() => handleShowEditModal("user", user.id)}
                  >
                    <span className="edit-button">Edit</span>
                  </td>

                  <td
                    className="table-button"
                    onClick={() => handleShowDeleteModal("user", user.id)}
                  >
                    <span className="delete-button">Delete</span>
                  </td>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserData;
