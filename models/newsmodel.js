const mongoose = require("mongoose");

const news = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model("news", news);
