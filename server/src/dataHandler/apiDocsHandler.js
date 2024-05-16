const fs = require("fs");

const apiDocsURL = "./src/docs/apiDocs.json";

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

module.exports = { loadApiDocs };
