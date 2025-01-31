import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './css/header.css';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navbar-right">
    <Navbar.Brand as={Link} to="/">Aircall</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Activity Feed</Nav.Link>
        <Nav.Link as={Link} to="/archived">Archived Calls</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
