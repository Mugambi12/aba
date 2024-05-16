const express = require("express");
const router = express.Router();
const { getapiDocs } = require("../controller/docsController");

router.get("/", getapiDocs);

module.exports = router;
