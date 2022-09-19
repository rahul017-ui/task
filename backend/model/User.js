const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  contact: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
},{
  timestamps:true
});
module.exports = mongoose.model("User", productSchema);
