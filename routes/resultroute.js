const express = require("express");
const router = express.Router();

//Import Controller
const { addresult } = require("../controller/resultauth");

// Routes;
router.post("/addresult", addresult);

module.exports = router;
