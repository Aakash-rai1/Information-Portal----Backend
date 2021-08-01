const express = require("express");
const router = express.Router();
const aauth = require("../middleware/aauth");

const {
  signup,
  login,
  logout,
  checklogin,
  updateAdmin,
  showsingle,
  showUsers,
} = require("../controller/adminauth");

// Routes;
router.post("/admin/add", signup);
router.post("/adminlogin", login);
router.delete("/adminlogout", aauth, logout);
router.get("/adminchecklogin", aauth, checklogin);
router.put("/admin/updateAdmin/:_id", aauth, updateAdmin);
router.get("/showsingle/admin/:id", showsingle);
router.get("/show/admins", showUsers);

module.exports = router;
