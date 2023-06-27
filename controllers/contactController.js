const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//get all contacts
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//get single Contact
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//to create a contact
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields Mandatory");
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(200).json(contact);
});

//to delate a contact
const deleteContact = asyncHandler(async (req, res) => {
  console.log("deleting");
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.remove();
  res.status(200).json(contact);
});

//to edit the contact
const editContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(200).json(updatedContact);
});

module.exports = {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  editContact,
};
