const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  pincode: { type: Number },
  task: { type: String },
});

module.exports = mongoose.model("todotask", Schema);
