import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ marginBottom: '20px' }}>
      <Container>
        <Navbar.Brand href="/">Contact Manager</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/create">Add Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
