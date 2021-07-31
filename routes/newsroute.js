const express = require("express");
const router = express.Router();

//Import Controller
const { addnews } = require("../controller/newsauth");

// Routes;
router.post("/addnews", addnews);

module.exports = router;
