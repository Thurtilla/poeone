import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export default function Header(props) {
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
      <Navbar.Brand as={Link} to="/">PoE AIO</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ml-2 justify-content-center">
        <Nav.Link>
            Sheets
          </Nav.Link>
          <Nav.Link>
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
};


