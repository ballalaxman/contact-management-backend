const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Username is Required"],
    },
    email: {
      type: String,
      required: [true, "Give your email"],
      unique: [true, "Email adress has already taken"],
    },
    password: {
      type: String,
      required: [true, "Enter your Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
