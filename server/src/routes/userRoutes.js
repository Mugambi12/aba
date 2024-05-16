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
router.put("/:id", updateUserById);
router.delete("/:id", authenticateUser, authorizeUser, deleteUserById);

module.exports = router;
