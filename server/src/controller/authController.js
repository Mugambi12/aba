// authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { loadData, saveData } = require("../dataHandler/dataHandler");

const generateToken = (userData) => {
  return jwt.sign(userData, "your_secret_key", { expiresIn: "1h" });
};

const registerUser = (req, res) => {
  const userData = req.body;

  const usersData = loadData();

  const existingUser = checkExistingUser(usersData, userData);
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "Phone number or email already exists" });
  }

  hashPasswordAndRegisterUser(userData, usersData, res);
};

const checkExistingUser = (usersData, userData) => {
  return usersData.users.find(
    (user) =>
      user.phone_number === userData.phone_number ||
      user.email === userData.email
  );
};

const hashPasswordAndRegisterUser = (userData, usersData, res) => {
  bcrypt.hash(userData.password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).json({ message: "Error hashing password" });
    }

    const newUser = {
      id: Date.now(),
      ...userData,
      password: hashedPassword,
    };

    usersData.users.push(newUser);

    saveData(usersData);

    const token = generateToken(newUser);

    res.status(200).json({ message: "User registered successfully", token });
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const usersData = loadData();

  const user = findUserByEmail(usersData, email);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  comparePasswordAndGenerateToken(password, user, res);
};

const findUserByEmail = (usersData, email) => {
  return usersData.users.find((user) => user.email === email);
};

const comparePasswordAndGenerateToken = (password, user, res) => {
  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user);

    res.status(200).json({ message: "User logged in successfully", token });
  });
};

const logoutUser = (req, res) => {
  // Logic for user logout (optional)
  res.status(200).send("User logged out successfully");
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
