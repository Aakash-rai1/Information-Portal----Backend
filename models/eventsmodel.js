const mongoose = require("mongoose");

const events = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model("events", events);
