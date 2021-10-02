const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const results = new mongoose.Schema({
  user_id: {
    type: Schema.ObjectId,
    ref: "User",
  },
  english: {
    type: String,
  },
  nepali: {
    type: String,
  },
  math: {
    type: String,
  },
  socail: {
    type: String,
  },
  science: {
    type: String,
  },
  opt_math: {
    type: String,
  },
  health_population: {
    type: String,
  },
  account: {
    type: String,
  },
  total: {
    type: String,
  },
});

module.exports = mongoose.model("results", results);
