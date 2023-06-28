const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { hash } = require("bcrypt");

const register = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("All fields are Required");
  }
  const user = await User.create({
    userName,
    email,
    password,
  });
  res.status(200).json(user);
});

const getUsers = async (res, req) => {
  try {
    const users = await User.find();

    return res.status(200).send({
      message: "Users fetched Successfully",
      content: users,
      status: "OK",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, getUsers };
