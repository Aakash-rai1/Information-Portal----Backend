const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadfile");

//Import Controller
const {
  addnews,
  showsingle,
  showNews,
  deleteNews,
  Uploadnewsimage,
} = require("../controller/newscontroller");

// Routes;
router.post("/admin/addnews", [upload], addnews);
router.get("/showsingle/news/:id", showsingle);
router.get("/show/news", showNews);
router.post("/updatenews", [upload], Uploadnewsimage);

router.delete("/delete/news/:id", deleteNews);

module.exports = router;
