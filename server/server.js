// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");

// Import route handlers
const { getapiDocs } = require("./src/api/apiDocs");
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

// Session middleware
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// CORS middleware
app.use(cors());

// Middleware to authenticate user
const authenticateUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).send("Unauthorized");
  }
};

// Middleware to authorize user (for delete operations)
const authorizeUser = (req, res, next) => {
  // Check if the authenticated user has the necessary permissions
  // For example, you might check if the user is the creator of the blog post
  // Here, we assume that the user is authorized for simplicity
  return next();
};

// Register route handlers
app.get("/docs/api", getapiDocs);

// User authentication routes
app.post("/users/register", registerUser);
app.post("/users/login", loginUser);
app.post("/users/logout", logoutUser);

// User management routes
app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);
app.put("/users/:id", authenticateUser, authorizeUser, updateUserById);
app.delete("/users/:id", authenticateUser, authorizeUser, deleteUserById);

// Blog routes
app.get("/blogs", getBlogs);
app.post("/blogs", authenticateUser, createBlog);
app.get("/blogs/:id", getBlogById);
app.put("/blogs/:id", authenticateUser, updateBlogById);
app.delete("/blogs/:id", authenticateUser, authorizeUser, deleteBlogById);

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// Export the app
module.exports = app;
