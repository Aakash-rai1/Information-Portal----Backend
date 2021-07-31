const mongoose = require("mongoose");

const results = new mongoose.Schema({
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
