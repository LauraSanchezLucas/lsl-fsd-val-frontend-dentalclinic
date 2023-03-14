import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './NavBar1.css'
import Image from "react-bootstrap/Image";
import logo from "../../assets/yo.png"

export const NavBar1 = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="md" className='header-NavBar'>
      <Container>
        <Container>
          <Nav.Link as={Link} to="/"><Image className="logo" src={logo}></Image></Nav.Link>
        </Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/treatment" >Treatments</Nav.Link>
            <Nav.Link as={Link} to="/about us" className='size'>About us</Nav.Link>
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
            <Nav.Link as={Link} to="/register" >Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


