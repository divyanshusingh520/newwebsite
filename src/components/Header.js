import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from "../components/Images/logos.svg";
import  "../components/styles/header.css"
import { Navbar} from 'react-bootstrap';



function Header() {
  return (

   
       
    <Navbar bg="light" expand="md">
  <Navbar.Brand href="#" className="me-0">
    <img src={logo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbar-nav" />
  <Navbar.Collapse id="navbar-nav">
  <Nav className="me-auto ms-auto flex-wrap justify-content-center">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#offerings">Our offerings</Nav.Link>
  <Nav.Link href="#team">Our Team</Nav.Link>
  <Nav.Link href="#contact">Contact us</Nav.Link>
  <Nav.Link href="#blogs">Blogs</Nav.Link>
</Nav>

    <Nav className="justify-content-end">
      <Button className="buttons">Register now</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>


  




    
  )
}

export default Header