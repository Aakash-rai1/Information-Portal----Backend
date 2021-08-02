const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

//Import Controller
const {
  signup,
  login,
  logout,
  checklogin,
  updateUser,
  deleteUser,
  showsingle,
  showUsers,
} = require("../controller/userauth");

// Routes;
router.post("/register", signup);
router.post("/login", login);
router.delete("/logout", auth, logout);
router.get("/checklogin", auth, checklogin);
router.put("/updateUser/:_id", auth, updateUser);
router.delete("/delete/user/:id", deleteUser);
router.get("/showsingle/user/:id", showsingle);
router.get("/show/users", showUsers);

module.exports = router;
