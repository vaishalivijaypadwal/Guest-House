// components/NavigationBar.js
import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About'},
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const handleContactClick = () => {
    navigate('/contact');
    // You can add additional logic here for contact modal if needed
    alert('Redirecting to Contact Page!');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
           
            <span className="brand-text">Clares Cone Guest House</span>
          </Navbar.Brand>
          
          {/* Desktop Navigation */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Nav.Link 
                  key={item.path} 
                  as={Link} 
                  to={item.path}
                  className="nav-link-custom mx-2"
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </Nav.Link>
              ))}
              
            </Nav>
          </Navbar.Collapse>

          {/* Mobile Menu Button */}
          <Button 
            variant="outline-light" 
            className="d-lg-none ms-2"
            onClick={handleShow}
          >
            <i className="bi bi-list"></i>
          </Button>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {navItems.map((item) => (
              <Nav.Link 
                key={item.path} 
                as={Link} 
                to={item.path}
                className="mobile-nav-link py-3"
                onClick={handleClose}
              >
                <span className="nav-icon fs-5 me-3">{item.icon}</span>
                {item.label}
              </Nav.Link>
            ))}
            <Button 
              variant="primary" 
              className="mt-4"
              onClick={() => {
                handleClose();
                handleContactClick();
              }}
            >
              Contact Us
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;