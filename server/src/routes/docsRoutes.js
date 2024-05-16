const express = require("express");
const router = express.Router();
const { getapiDocs } = require("../controller/apiDocsController");

router.get("/", getapiDocs);

module.exports = router;
