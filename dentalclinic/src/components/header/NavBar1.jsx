import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,  useNavigate } from 'react-router-dom';
import './NavBar1.css'
import Image from "react-bootstrap/Image";
import logo from "../../assets/yo.png"
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../layout/userSlice';
import { userout } from '../../layout/userSlice';
import NavDropdown from "react-bootstrap/NavDropdown";


export const NavBar1 = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataCredentialRdx = useSelector(userData);
  console.log(dataCredentialRdx)

  const logout = () => {
    // dispatch(logout(dataCredentialsRdx = ""));
    dispatch(userout({credentials:{}, token:''}));
    return navigate("/");
    };
    
  

  return (
    <Navbar collapseOnSelect expand="sm" className='header-NavBar'>
      <Container>
          <Nav.Link as={Link} to="/"><Image className="logo" src={logo}></Image></Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/treatment" >Treatments</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className='size'>About us</Nav.Link>
              {!dataCredentialRdx?.credentials?.role ? ( 
              <>
              <Nav.Link as={Link} to="/login" >Login</Nav.Link>
              <Nav.Link as={Link} to="/register" >Register</Nav.Link>
              </>
              ):
              dataCredentialRdx?.credentials?.role?.includes('patient') ? (
                <>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/seeappointment">View Appointment</NavDropdown.Item>
                  <NavDropdown.Item href="/bookappointment">Book Appointment</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/" onClick={()=> logout()}>Logout</Nav.Link>
                </>
              ):
              dataCredentialRdx?.credentials?.role?.includes('doctor') ? (
                <>
                  <Nav.Link as={Link} to="/seedocappointment" className='doctor-size'>View Appointment</Nav.Link>
                  <Nav.Link as={Link} to="/" onClick={()=> logout()}>Logout</Nav.Link>
                </>
              ):
            dataCredentialRdx?.credentials?.role?.includes('admin') ? (
              <>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/useradmin">View all users</NavDropdown.Item>
                  <NavDropdown.Item href="/bookappointment">Book Appointment</NavDropdown.Item>
                  <NavDropdown.Item href="/seeadmappointment">View Appointment</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/" onClick={()=> logout()}>Logout</Nav.Link>
              </>
              ):(<Nav.Link as={Link} to="/" onClick={()=> logout()}>Logout</Nav.Link>)
              }
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}





