const { loadData, saveData } = require("../dataHandler/dataHandler");

// Utility function to validate user data
const validateUser = (user) => {
  return (
    user &&
    user.username &&
    user.email &&
    user.name &&
    user.age &&
    user.gender &&
    user.country &&
    user.occupation
  );
};

const getAllUsers = (req, res) => {
  try {
    const usersData = loadData().users;
    res.status(200).json(usersData);
    console.log("Querying all users");
  } catch (error) {
    res.status(500).send("An error occurred while fetching users");
    console.error("Error querying users:", error);
  }
};

const getUserById = (req, res) => {
  const userId = Number(req.params.id);

  try {
    const usersData = loadData();
    const user = usersData.users.find((user) => user.id === userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("An error occurred while fetching the user");
    console.error("Error fetching user:", error);
  }
};

const updateUserById = (req, res) => {
  const userId = Number(req.params.id);
  const updatedUser = req.body;

  if (!validateUser(updatedUser)) {
    return res.status(400).send("Invalid user data");
  }

  try {
    const usersData = loadData();
    const userIndex = usersData.users.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      updatedUser.id = userId;
      usersData.users[userIndex] = updatedUser;
      saveData(usersData);
      res.status(200).send("User updated successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("An error occurred while updating the user");
    console.error("Error updating user:", error);
  }
};

const deleteUserById = (req, res) => {
  const userId = Number(req.params.id);

  try {
    const usersData = loadData();
    const userIndex = usersData.users.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      usersData.users.splice(userIndex, 1);
      saveData(usersData);
      res.status(200).send("User deleted successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("An error occurred while deleting the user");
    console.error("Error deleting user:", error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
