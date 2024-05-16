const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controller/userController");

const {
  authenticateUser,
  authorizeUser,
} = require("../middleware/authMiddleware");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", authenticateUser, authorizeUser, updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
