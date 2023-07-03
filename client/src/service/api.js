import axios from 'axios'

const url = "http://localhost:5000"

export const addContact = async (contact) => {
    try {
        return await axios.post(`${url}/add`, contact)
    } catch (err) {
        console.log("Error in adding Contact", err)
    }
}

export const getContacts = async () => {
    try {
        return await axios.get(`${url}/all`)
    } catch (error) {
        console.log("Error in retrieving Contacts", error)
    }
}

export const getContact = async (id) => {
    try {
        return await axios.get(`${url}/${id}`)
    } catch (err) {
        console.log("Error in getting contact details", err)
    }
}

export const updateContact = async (contact, id) => {
    try {
        return await axios.post(`${url}/edit/${id}`, contact)
    } catch (err) {
        console.log("Error in editing contact", err)
    }
}

export const delContact = async (id) => {
    try {
        return await axios.delete(`${url}/${id}`)
    } catch (err) {
        console.log("Error in deleting contact")
    }
}
