const express = require("express");
const router = express.Router();

//Import Controller
const {
  addresult,
  findResultByUserId,
  deleteResult,
} = require("../controller/resultcontroller");

// Routes;
router.post("/admin/addresult", addresult);
router.get("/admin/getresult/:user_id", findResultByUserId);
router.delete("/delete/result/:id", deleteResult);

module.exports = router;
