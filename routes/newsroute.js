const express = require("express");
const router = express.Router();

//Import Controller
const { addnews, showsingle, showNews } = require("../controller/newsauth");

// Routes;
router.post("/admin/addnews", addnews);
router.get("/showsingle/news/:id", showsingle);
router.get("/show/news", showNews);

module.exports = router;
