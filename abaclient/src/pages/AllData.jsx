import React, { useState, useEffect } from "react";
import { fetchUsersData } from "../dataHandlers/getAllUsers";
import { deleteUserDataByID } from "../dataHandlers/deleteUserById";
import { fetchBlogsData } from "../dataHandlers/getAllBlogs";
import "./AllData.css";

function DeleteModal({ userId, onDelete, onClose }) {
  const handleConfirmDelete = () => {
    onDelete(userId);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this user?</p>
        <p>This action cannot be undone.</p>
        <p>User ID: {userId}</p>
        <div className="modal-buttons">
          <button onClick={handleConfirmDelete}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function AllData() {
  const [usersData, setUsersData] = useState(null);
  const [blogsData, setBlogsData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const users = await fetchUsersData();
      const blogs = await fetchBlogsData();

      setUsersData(users);
      setBlogsData(blogs);
    }

    fetchData();
  }, []);

  const handleDeleteUser = async (id) => {
    const res = await deleteUserDataByID(id);
    console.log(res);
    const updatedUsers = await fetchUsersData();
    setUsersData(updatedUsers);
  };
  const handleShowModal = (id) => {
    setUserIdToDelete(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUserIdToDelete(null);
  };

  return (
    <div>
      <h1>All Data</h1>

      {/* Display Users Data */}
      <div>
        <h2>Users Data</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Occupation</th>
              <th>Interests</th>
              <th>Registered At</th>
              <th>Last Login</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {usersData &&
              usersData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.country}</td>
                  <td>{user.occupation}</td>
                  <td>{user.interests.join(", ")}</td>
                  <td>{user.registeredAt}</td>
                  <td>{user.lastLogin}</td>
                  <td
                    style={{ padding: "5px", cursor: "pointer" }}
                    onClick={() => handleShowModal(user.id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Display Blogs Data */}
      <div>
        <h2>Blogs Data</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author ID</th>
              <th>Content</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {blogsData &&
              blogsData.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.id}</td>
                  <td>{blog.title}</td>
                  <td>{blog.authorId}</td>
                  <td>{blog.content}</td>
                  <td>{blog.createdAt}</td>
                  <td>{blog.updatedAt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Modal for confirming deletion */}
      {showModal && (
        <DeleteModal
          userId={userIdToDelete}
          onDelete={handleDeleteUser}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default AllData;
