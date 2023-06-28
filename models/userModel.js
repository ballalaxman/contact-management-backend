const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Username is Required"],
  },
  email: {
    type: String,
    required: [true, "Give your email"],
  },
  password: {
    type: String,
    required: [true, "Enter your Password"],
  },
});

module.exports = mongoose.model("User", userSchema);
