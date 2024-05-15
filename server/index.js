const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getDocsApi } = require("./src/api/docsApi");
const { registerUser, loginUser, logoutUser } = require("./src/api/authApi");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("./src/api/usersApi");
const {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} = require("./src/api/blogsApi");

const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Middleware to enable CORS
app.use(cors());

// Register route handlers
app.get("/docs/api", getDocsApi);

app.post("/users/register", registerUser);
app.post("/users/login", loginUser);
app.post("/users/logout", logoutUser);

app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);
app.put("/users/:id", updateUserById);
app.delete("/users/:id", deleteUserById);

app.get("/blogs", getBlogs);
app.post("/blogs", createBlog);
app.get("/blogs/:id", getBlogById);
app.put("/blogs/:id", updateBlogById);
app.delete("/blogs/:id", deleteBlogById);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

module.exports = app;
