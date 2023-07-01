const express = require("express");
const {
  register,
  getUsers,
  loginUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(register);
router.route("/").get(getUsers);
router.route("/login").post(loginUser);

module.exports = router;
