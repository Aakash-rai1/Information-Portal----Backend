const express = require("express");
const router = express.Router();
// const upload = require("../middleware/uploadfile");

//Import Controller
const {
  addNotification,
  getAllNotification,
  deleteNotification,
} = require("../controller/notificationcontroller");
// Routes;
router.post("/admin/addnotificaiton", addNotification);
router.get("/admin/getnotificaiton", getAllNotification);
router.delete("/admin/deletenotification/:_id", deleteNotification);

module.exports = router;
