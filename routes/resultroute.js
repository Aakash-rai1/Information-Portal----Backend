const express = require("express");
const router = express.Router();

//Import Controller
const { addresult, findResultByUserId } = require("../controller/resultauth");

// Routes;
router.post("/admin/addresult", addresult);
router.get("/admin/getresult/:user_id", findResultByUserId);

module.exports = router;
