import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import auth from "../../../firebase.init";
import './Header.css';


const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
  }
    return ( 
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark"  sticky="top">
       <Container>
  <Navbar.Brand as={Link} to="/home">DMS Travel Guide</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto menubar ">
      <Nav.Link as={Link}  to="/home">Home</Nav.Link>
      <Nav.Link as={Link}  to="/services">Services</Nav.Link>
      <Nav.Link as={Link}  to="/blogs">Blog</Nav.Link>
      <Nav.Link as={Link}  to="/about">About Me</Nav.Link>
    {
      user ?
      <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>Sign out</button> :
      <Nav.Link as={Link}  to="/login">Login</Nav.Link>
    }
  
    </Nav>
   
  </Navbar.Collapse>
  </Container>
    </Navbar>
    );
};

export default Header;