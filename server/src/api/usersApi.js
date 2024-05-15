// usersApi.js
const { loadData, saveData } = require("../dataHandler/dataHandler");

exports.getAllUsers = (req, res) => {
  const usersData = loadData().users;
  res.status(200).json(usersData);
  console.log("Querying all users");
};

exports.getUserById = (req, res) => {
  const userId = req.params.id;
  const usersData = loadData();
  const user = usersData.users.find((user) => user.id === userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("User not found");
  }
};

exports.updateUserById = (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  const usersData = loadData();
  const userIndex = usersData.users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    usersData.users[userIndex] = updatedUser;
    saveData(usersData);
    res.status(200).send("User updated successfully");
  } else {
    res.status(404).send("User not found");
  }
};

exports.deleteUserById = (req, res) => {
  const userId = req.params.id;
  const usersData = loadData();
  const userIndex = usersData.users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    usersData.users.splice(userIndex, 1);
    saveData(usersData);
    res.status(200).send("User deleted successfully");
  } else {
    res.status(404).send("User not found");
  }
};
