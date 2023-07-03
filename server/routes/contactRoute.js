const express = require("express")
const { addContact, getContacts, getContact, updateContact, delContact } = require("../controller/contactController")
const router = express.Router()


router.route("/add").post(addContact)
router.route("/all").get(getContacts)
router.route("/:id").get(getContact)
router.route("/edit/:id").post(updateContact)
router.route("/:id").delete(delContact)



module.exports = router