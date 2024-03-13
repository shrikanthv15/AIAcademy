import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarApp() {
  return (
   <div className='navbarclass' style={{ width: "100%", backgroundColor: "#003049"}}>
      <Navbar  >
        <Container >
          <Navbar.Brand href="#home" style={{ color: "white" , marginLeft: "-3%" }}>AI Academy</Navbar.Brand>
          <Nav className="me-auto" style={{ color: "white" }}>
            <Nav.Link href="#home" style={{ color: "white" }}>Home</Nav.Link>
            <Nav.Link href="#features" style={{ color: "white" }}>Workshops</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "white" }}>Newsletters</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "white" }}>Events</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  );
}

export default NavbarApp;