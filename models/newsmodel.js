const mongoose = require("mongoose");

const news = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("news", news);
