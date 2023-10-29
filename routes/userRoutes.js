const express = require("express");
const {
  register,
  getUsers,
  loginUser,
  getCurrentUser,
  getUserById,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.route("/register").post(register);
router.route("/").get(getUsers);
router.route("/login").post(loginUser);
router.route("/currentUSer").get(validateToken, getCurrentUser);
router.route("/:id").get(getUserById);

module.exports = router;
