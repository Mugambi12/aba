const express = require("express");
const router = express.Router();
const {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} = require("../controller/blogController");

const {
  authenticateUser,
  authorizeUser,
} = require("../middleware/authMiddleware");

router.get("/", getBlogs);
router.post("/", createBlog);
router.get("/:id", getBlogById);
router.put("/:id", updateBlogById);
router.delete("/:id", authenticateUser, authorizeUser, deleteBlogById);

module.exports = router;