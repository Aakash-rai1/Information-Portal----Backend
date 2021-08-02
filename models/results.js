const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const results = new mongoose.Schema({
  user_id: {
    type: Schema.ObjectId,
    ref: "User",
  },
  module: {
    type: String,
  },
  module_id: {
    type: String,
  },
  marks_obtained: {
    type: String,
  },
  total: {
    type: String,
  },
});

module.exports = mongoose.model("results", results);
