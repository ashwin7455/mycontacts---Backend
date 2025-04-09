const express = require("express");
const router =  express.Router();

const {getContacts, createContact ,getContact , updateContact, deleteContact} = require("../controllers/contactControllers");

router.route("/").get(getContacts).get(getContact);

router.route("/"). post(createContact).put(updateContact).delete(deleteContact);



module.exports = router;

