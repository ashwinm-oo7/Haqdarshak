const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  location: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
  // Add additional fields as required
});

module.exports = mongoose.model("User", userSchema);
