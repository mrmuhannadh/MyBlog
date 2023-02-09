import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css'
import img from '../../images/myimage.PNG'

const TopNav = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 nb">
          <Container fluid >
            <Navbar.Brand href="#">
              <img src={img} alt="" className='navbar-toggler-icon myicon' />
              M.R. Muhannadh
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="nb"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  My Blog
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className='navText'>Home</Nav.Link>
                  <Nav.Link href="/Education" className='navText'>Education</Nav.Link>
                  <Nav.Link href="/Skills" className='navText'>Skills</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default TopNav
