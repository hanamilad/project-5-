import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand  >Sport Team</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to={"/"}>Home</Link>
                <Link to={"Games"}>Games</Link>
                <Link to={"About"}>About us </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default Header
