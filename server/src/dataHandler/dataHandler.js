const fs = require("fs");

const dbURL = "./src/db/data.json";

// Load data from JSON file
function loadData() {
  try {
    const data = fs.readFileSync(dbURL, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    return { users: [], blogs: [] };
  }
}

// Save data to JSON file
function saveData(data) {
  try {
    fs.writeFileSync(dbURL, JSON.stringify(data, null, 2), "utf8");
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

module.exports = { loadData, saveData };
