// authUtils.js
const jwt = require("jsonwebtoken");

const secretKey = "your_secret_key"; // Replace with your secret key

const generateToken = (user) => {
  const payload = { id: user.id, username: user.username, email: user.email };
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
