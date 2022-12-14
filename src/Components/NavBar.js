import React from 'react'
import { Badge , Navbar , Container , Nav  } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
function NavBar (props) {
  const navigate = useNavigate()
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
        <NavLink to='/cart' >
        <Badge style={{marginLeft:"20px"}}  >
          <FaShoppingCart />{newCouter.length}</Badge>
        </NavLink>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default  NavBar