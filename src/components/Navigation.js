import React from 'react';
import { Navbar, 
        Nav, 
        Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/Navigation.css';

import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

import { navigation } from '../EditMe';

function Navigation() {
    return (
        <Navbar variant="dark" className="nav" expand="lg" sticky="top">
        {navigation.navLogo.enabled && (
            <Navbar.Brand className="nav-brand" href={navigation.navLogo.linkTo}>{
                navigation.navLogo.isImage ? (
                    <img src={navigation.navLogo.imageURL} className="nav-logo" width={navigation.navLogo.logoWidth} alt={navigation.navLogo.altText}/> 
                ) : (
                    navigation.navLogo.altText
                )
            }</Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {navigation.leftNavigation.map((item) => 
                    <Nav.Link className="nav-items" href={item.url}>{item.text}</Nav.Link>
                )}
            </Nav>
            <Nav>
                {navigation.rightNavigation.map((item) => 
                    <Nav.Link className="nav-items" href={item.url}>{item.text}</Nav.Link>
                )}
                { navigation.resumeBtn.enabled && ( <Button className="nav-resume" href={navigation.resumeBtn.url} target="_blank" rel="noreferrer">{navigation.resumeBtn.text} { navigation.resumeBtn.downloadIcon && (
                    <FontAwesomeIcon icon={ faFileDownload } />
                )}
                </Button> )}   
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;