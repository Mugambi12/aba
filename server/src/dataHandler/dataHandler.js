const fs = require("fs");

const docsURL = "./src/db/docs/docs.json";
const dbURL = "./src/db/data.json";

// Get API documentation
function loadDocs() {
  try {
    const data = fs.readFileSync(docsURL, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    return { documentation: [] };
  }
}

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

module.exports = { loadDocs, loadData, saveData };
