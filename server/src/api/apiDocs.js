// apiDocs.js
const { loadApiDocs } = require("../dataHandler/dataHandler");

exports.getapiDocs = (req, res) => {
  const docsData = loadApiDocs().documentation;
  res.status(200).json(docsData);
  console.log("Querying all documentation");
};
