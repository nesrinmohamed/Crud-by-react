import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand to="/">E-Commerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink to="/" className='p-3'>Home</NavLink>
        </Nav>
      </Navbar.Collapse>
      <NavLink to='/cart' className='p-3'>Cart <span>{props.product.length}</span></NavLink>
    </Container>
  </Navbar>

  )
}

export default NavBar