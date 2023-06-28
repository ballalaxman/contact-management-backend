const express = require("express");
const { register, getUsers } = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(register);
router.route("/").get(getUsers);

module.exports = router;
