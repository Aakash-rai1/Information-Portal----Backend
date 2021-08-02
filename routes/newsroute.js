const express = require("express");
const router = express.Router();

//Import Controller
const {
  addnews,
  showsingle,
  showNews,
  deleteNews,
} = require("../controller/newsauth");

// Routes;
router.post("/admin/addnews", addnews);
router.get("/showsingle/news/:id", showsingle);
router.get("/show/news", showNews);
router.delete("/delete/news/:id", deleteNews);

module.exports = router;
