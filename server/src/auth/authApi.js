// authApi.js
const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { loadData, saveData } = require("../dataHandler/dataHandler");
const { generateToken, verifyToken } = require("./authUtils");

const router = express.Router();

// Utility function to validate user data
const validateUser = (user) => {
  return user && user.username && user.email && user.password && user.name;
};

// Register a new user
router.post("/register", async (req, res) => {
  const userData = req.body;

  if (!validateUser(userData)) {
    return res.status(400).send("Invalid user data");
  }

  const usersData = loadData();
  const existingUser = usersData.users.find(
    (user) =>
      user.email === userData.email || user.username === userData.username
  );

  if (existingUser) {
    return res.status(409).send("User already exists");
  }

  // Hash the password before storing
  userData.password = await bcrypt.hash(userData.password, 10);
  // Assign a new unique ID (for simplicity, using current timestamp)
  userData.id = Date.now();
  usersData.users.push(userData);

  saveData(usersData);
  const token = generateToken(userData);
  res.status(201).json({ message: "User registered successfully", token });
  console.log("User registered successfully", token);
});

// Login a user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  const usersData = loadData();
  const user = usersData.users.find((user) => user.email === email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send("Invalid email or password");
  }

  const token = generateToken(user);
  res.status(200).json({ message: "User logged in successfully", token });
});

// Google OAuth routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    const token = generateToken(req.user);
    res.status(200).json({ message: "User logged in with Google", token });
  }
);

// Facebook OAuth routes
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  (req, res) => {
    const token = generateToken(req.user);
    res.status(200).json({ message: "User logged in with Facebook", token });
  }
);

module.exports = router;
