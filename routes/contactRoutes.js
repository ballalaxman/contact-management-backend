const express = require("express");

const router = express.Router();
const {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  editContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContactById).put(editContact).delete(deleteContact);

module.exports = router;
