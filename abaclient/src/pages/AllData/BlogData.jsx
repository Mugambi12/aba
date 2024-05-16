import React from "react";

function BlogData({
  blogsData,
  handleShowDeleteModal,
  handleShowEditModal,
  handleShowViewModal,
}) {
  return (
    <div>
      <h2 className="table-title">Blogs Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author ID</th>
            <th>Content</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th> {/* Changed from 'Delete' to 'Actions' */}
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
                <td>
                  <span
                    className="table-button"
                    onClick={() => handleShowViewModal("blog", blog.id)}
                  >
                    <span className="view-button">View</span>
                  </span>
                  <span
                    className="table-button"
                    onClick={() => handleShowEditModal("blog", blog.id)}
                  >
                    <span className="edit-button">Edit</span>
                  </span>
                  <span
                    className="table-button"
                    onClick={() => handleShowDeleteModal("blog", blog.id)}
                  >
                    <span className="delete-button">Delete</span>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default BlogData;
