import React from 'react'
import { Badge , Navbar , Container , Nav  } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
function NavBar (props) {
  const counter = props.products
  const newCouter = counter.filter(e => {
  if(e.count >0){
  return e
  }
  })
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand to="/">E-commerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          
          <NavLink to="/" className='p-3'>Products 
         <Badge style={{marginLeft:"20px"}}> <FaShoppingCart/>{newCouter.length}</Badge>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default  NavBar