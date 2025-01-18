import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

const Nawbar = () => {
  return (
    <div>
   <Navbar expand="lg" className="bg-primary">
      <Container className='cont'>
        <Navbar.Brand href="#home" className="text-white fw-bold" style={{fontSize:"30px"}}>Oli<span style={{color:"orange"}}>V</span>iance</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#link" className="text-white">About Me</Nav.Link>
            <NavDropdown 
              title={<span className="text-white">Socials</span>} 
              id="basic-nav-dropdown" 
              menuVariant="dark" 
            >
              <NavDropdown.Item href="https://github.com/senoraolivia" target = "_blank" className="text-white">
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href="https://az.linkedin.com/" target = "_blank" className="text-white">
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Nawbar