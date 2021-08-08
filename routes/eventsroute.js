const express = require("express");
const router = express.Router();

//Import Controller
const {
  addevents,
  showsingle,
  showEvents,
  deleteEvent,
} = require("../controller/eventscontroller");

// Routes;
router.post("/admin/addevent", addevents);
router.get("/showsingle/event/:id", showsingle);
router.get("/show/events", showEvents);
router.delete("/delete/event/:id", deleteEvent);

module.exports = router;
