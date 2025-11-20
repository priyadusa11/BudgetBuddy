const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  designation: { type: String },
  company: { type: String },
  location: { type: String },
  bio: { type: String },
});

module.exports = mongoose.model("Profile", ProfileSchema);
