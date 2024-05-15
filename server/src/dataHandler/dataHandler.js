const fs = require("fs");

const apiDocsURL = "./src/docs/apiDocs.json";
const dbURL = "./src/db/data.json";

// Get API documentation
function loadApiDocs() {
  try {
    const data = fs.readFileSync(apiDocsURL, "utf8");
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
    fs.writeFileSync(dbURL, "utf8", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

module.exports = { loadApiDocs, loadData, saveData };
