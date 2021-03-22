import React from 'react';
import { Navbar, 
        Nav, 
        Button } from 'react-bootstrap';

import '../css/Navigation.css';

import { leftNavigation, rightNavigation, resumeBtn } from '../EditMe';

function Navigation() {
    return (
        <Navbar variant="dark" className="nav" expand="lg" sticky="top">
        <Navbar.Brand className="nav-brand" href="#home">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {leftNavigation.map((item) => 
                    <Nav.Link className="nav-items" href={item.url}>{item.text}</Nav.Link>
                )}
            </Nav>
            <Nav>
                {rightNavigation.map((item) => 
                    <Nav.Link className="nav-items" href={item.url}>{item.text}</Nav.Link>
                )}
                { resumeBtn.enabled && ( <Button className="nav-resume">Resume</Button> )}   
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;