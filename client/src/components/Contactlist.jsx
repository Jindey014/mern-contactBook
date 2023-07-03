import React, { useState } from 'react'
import { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { getContacts, delContact } from '../service/api'
import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'

const Contactlist = () => {
  const [contacts, setContact] = useState([])

  useEffect(() => {
    getAllContacts()
  }, [])

  const getAllContacts = async () => {
    const response = await getContacts()
    setContact(response.data)
  }

  const deleteContact = async (id) => {
    await delContact(id)
    getAllContacts()
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Contact Name</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact._id}>
            <td>{contact.name}</td>
            <td>{contact.number}</td>
            <td>{contact.email}</td>
            <td>
              <Link to={`/edit/${contact._id}`}>
                <Button variant="primary" style={{ marginRight: '20px' }}>
                  Edit
                </Button>
              </Link>
              <Button
                variant="primary"
                onClick={() => deleteContact(contact._id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Contactlist
