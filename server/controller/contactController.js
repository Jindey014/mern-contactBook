const Contact = require("../model/contactModel")

const addContact = async (req, res) => {
    const name = req.body.name
    const number = req.body.number
    const email = req.body.email

    const newContact = new Contact({ name, number, email })

    try {
        await newContact.save()
        res.status(201).json("New Contact added")
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getContacts = async (req, res) => {
    try {
        const contactList = await Contact.find()
        res.status(201).json(contactList)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


const getContact = async (req, res) => {
    try {
        const contactDetail = await Contact.findById(req.params.id)
        res.status(201).json(contactDetail)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


const updateContact = async (req, res) => {
    const contact = req.body
    try {
        await Contact.findByIdAndUpdate(req.params.id, contact)
        res.status(201).json(updateContact)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const delContact = async (req, res) => {
    try {
        await Contact.deleteOne({ _id: req.params.id })
        res.status(201).json('User deleted Sucessfully')
    } catch (err) {
        res.status(401).json({ message: err.message })
    }
}

module.exports = { addContact, getContacts, getContact, updateContact, delContact }