import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { addContact } from '../service/api'

const defaultValue = {
  name: '',
  number: '',
  email: '',
}

const AddContact = () => {
  const [contact, setContact] = useState(defaultValue)

  const onValueChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const submitHandler = async () => {
    await addContact(contact)
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
          onChange={(e) => onValueChange(e)}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
          type="text"
          required
          onChange={(e) => onValueChange(e)}
          name="number"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          required
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

export default AddContact
