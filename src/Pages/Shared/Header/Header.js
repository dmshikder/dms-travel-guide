import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css';


const Header = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
       <Container>
  <Navbar.Brand href="/home">DMS Travel Guide</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto menubar ">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/blogs">Blog</Nav.Link>
      <Nav.Link href="/about">About Me</Nav.Link>
      <Nav.Link  href="/login">Login</Nav.Link>
  
    </Nav>
   
  </Navbar.Collapse>
  </Container>
    </Navbar>
    );
};

export default Header;