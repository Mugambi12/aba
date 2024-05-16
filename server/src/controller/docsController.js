// apiDocs.js
const { loadDocs } = require("../dataHandler/dataHandler");

exports.getapiDocs = (req, res) => {
  const docsData = loadDocs().documentation;
  res.status(200).json(docsData);
  console.log("Querying all documentation");
};
