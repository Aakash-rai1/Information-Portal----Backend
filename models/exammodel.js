const mongoose = require("mongoose");

const exams = new mongoose.Schema({
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  location: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model("Exam", exams);
