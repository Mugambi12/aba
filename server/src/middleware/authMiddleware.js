const authenticateUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).send("Unauthorized");
  }
};

const authorizeUser = (req, res, next) => {
  // Check if the authenticated user has the necessary permissions
  // For example, you might check if the user is the creator of the blog post
  // Here, we assume that the user is authorized for simplicity
  return next();
};

module.exports = { authenticateUser, authorizeUser };
