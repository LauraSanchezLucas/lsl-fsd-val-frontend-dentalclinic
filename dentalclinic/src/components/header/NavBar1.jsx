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
    <div className='navBarAll'>
    <Navbar sticky="top" collapseOnSelect expand="md" className='header-NavBar'>
      <Container>
        <Container>
          <Nav.Link as={Link} to="/"><Image className="logo" src={logo}></Image></Nav.Link>
        </Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
          <NavDropdown title="Treatments" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Implant</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Prothesis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Orthodontic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cavities</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Whitening</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/" className='size'>About us</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}


