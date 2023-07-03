import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { addContact, getContact, updateContact } from '../service/api'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const defaultValue = {
  name: '',
  number: '',
  email: '',
}

const EditContact = () => {
  const [contact, setContact] = useState(defaultValue)

  const { id } = useParams()

  const onValueChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    getContactDetail()
  }, [])

  const getContactDetail = async () => {
    const response = await getContact(id)
    console.log(response.data)
    setContact(response.data)
  }

  const submitHandler = async () => {
    await updateContact(contact, id)
    window.location.href = '/'
  }

  return (
    <Form>
      <h3>ADD NEW CONTACT</h3>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contact Name</Form.Label>
        <Form.Control
          type="text"
          required
          value={contact.name}
          onChange={(e) => onValueChange(e)}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
          type="text"
          required
          value={contact.number}
          onChange={(e) => onValueChange(e)}
          name="number"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          required
          value={contact.email}
          onChange={(e) => onValueChange(e)}
          name="email"
        />
      </Form.Group>
      <Button variant="primary" onClick={() => submitHandler()}>
        Add Contact
      </Button>
    </Form>
  )
}

export default EditContact
