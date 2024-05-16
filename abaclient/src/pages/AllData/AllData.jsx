import React, { useState, useEffect } from "react";
import { fetchUsersData } from "../../dataHandlers/getAllUsers";
import { deleteUserDataByID } from "../../dataHandlers/deleteUserById";
import { fetchBlogsData } from "../../dataHandlers/getAllBlogs";
import { deleteBlogDataByID } from "../../dataHandlers/deleteBlogById";
import DeleteModal from "../../Components/Modal/DeleteModal";
import EditModal from "../../Components/Modal/EditModal";
import ViewModal from "../../Components/Modal/ViewModal";
import UserData from "./UserData";
import BlogData from "./BlogData";
import "./AllData.css";

function AllData() {
  const [usersData, setUsersData] = useState(null);
  const [blogsData, setBlogsData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({ type: "", id: null });
  const [itemToEdit, setItemToEdit] = useState({ type: "", id: null });
  const [itemToView, setItemToView] = useState({ type: "", id: null });

  useEffect(() => {
    async function fetchData() {
      const users = await fetchUsersData();
      const blogs = await fetchBlogsData();

      setUsersData(users);
      setBlogsData(blogs);
    }

    fetchData();
  }, []);

  const handleDeleteItem = async (id) => {
    if (itemToDelete.type === "user") {
      const res = await deleteUserDataByID(id);
      console.log(res);
      const updatedUsers = await fetchUsersData();
      setUsersData(updatedUsers);
    } else if (itemToDelete.type === "blog") {
      const res = await deleteBlogDataByID(id);
      console.log(res);
      const updatedBlogs = await fetchBlogsData();
      setBlogsData(updatedBlogs);
    }

    // Add handling for other item types here
  };

  const handleShowDeleteModal = (type, id) => {
    setItemToDelete({ type, id });
    setShowDeleteModal(true);
  };

  const handleShowEditModal = (type, id) => {
    setItemToEdit({ type, id });
    setShowEditModal(true);
  };

  const handleShowViewModal = (type, id) => {
    setItemToView({ type, id });
    setShowViewModal(true);
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    setItemToDelete({ type: "", id: null });
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setItemToEdit({ type: "", id: null });
  };

  const handleCloseViewModal = () => {
    setShowViewModal(false);
    setItemToView({ type: "", id: null });
  };

  return (
    <div className="all-data-container">
      <h1>All Data</h1>

      <UserData
        usersData={usersData}
        handleShowDeleteModal={handleShowDeleteModal}
        handleShowEditModal={handleShowEditModal}
        handleShowViewModal={handleShowViewModal}
      />

      <BlogData
        blogsData={blogsData}
        handleShowDeleteModal={handleShowDeleteModal}
        handleShowEditModal={handleShowEditModal}
        handleShowViewModal={handleShowViewModal}
      />

      {showDeleteModal && (
        <DeleteModal
          itemType={itemToDelete.type}
          itemId={itemToDelete.id}
          onDelete={handleDeleteItem}
          onClose={handleCloseModal}
        />
      )}

      {showEditModal && (
        <EditModal
          itemType={itemToEdit.type}
          itemId={itemToEdit.id}
          onClose={handleCloseEditModal}
        />
      )}

      {showViewModal && (
        <ViewModal
          itemType={itemToView.type}
          itemId={itemToView.id}
          onClose={handleCloseViewModal}
        />
      )}
    </div>
  );
}

export default AllData;
