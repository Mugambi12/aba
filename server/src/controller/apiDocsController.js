// apiDocs.js
const { loadApiDocs } = require("../dataHandler/apiDocsHandler");

exports.getapiDocs = (req, res) => {
  const docsData = loadApiDocs().documentation;
  res.status(200).json(docsData);
  console.log("Querying all documentation");
};
