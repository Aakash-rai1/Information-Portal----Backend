const express = require("express");
const router = express.Router();
const aauth = require("../middleware/aauth");

const {
  signup,
  login,
  logout,
  checklogin,
  updateAdmin,
} = require("../controller/adminauth");

// Routes;
router.post("/admin/add", signup);
router.post("/adminlogin", login);
router.delete("/adminlogout", aauth, logout);
router.get("/adminchecklogin", aauth, checklogin);
router.put("/update/admin/:_id", aauth, updateAdmin);

module.exports = router;
