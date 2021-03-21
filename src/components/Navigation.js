import React from 'react';
import { Navbar, 
        Nav, 
        Button } from 'react-bootstrap';

import '../css/Navigation.css';

function Navigation() {
    return (
        <Navbar variant="dark" className="nav" expand="lg" sticky="top">
        <Navbar.Brand className="nav-brand" href="#home">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

                {/* Left Side */}

            </Nav>
            <Nav>
                <Nav.Link className="nav-items" href="#home">_About Me</Nav.Link>
                <Nav.Link className="nav-items" href="#home">_Portfolio</Nav.Link>
                <Nav.Link className="nav-items" href="#home">_Experience</Nav.Link>
                <Nav.Link className="nav-items" href="#home">_Contact</Nav.Link>
                <Button className="nav-resume">Resume</Button>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;