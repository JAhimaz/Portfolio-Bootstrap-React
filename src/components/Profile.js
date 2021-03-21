import React from 'react';

import { Container, Col, 
    Row } from 'react-bootstrap';

import profilePhoto from '../assets/profile/profile.png'
import '../css/Profile.css';

// Value Import
import { fullName, welcomeMsg, companyPosition, companyName } from '../EditMe';

function Profile() {
    return (
        <Container fluid className="profile-row">
            <Row>
                <Col className="column-greeting" xs={12} lg={4}>
                    <p className="greeting-sub">{welcomeMsg}</p>
                    <p className="greeting-name">{fullName}</p>
                </Col>
                <Col className="column-profile" xs={12} lg={4}>
                    <div className="profile">
                        <img className="profile-img" src={profilePhoto}></img>
                    </div>
                </Col>
                <Col className="column-status" xs={12} lg={4}>
                    <p className="lower-profile-text">{companyPosition}</p>
                    <p className="lower-profile-text-sub">@ {companyName}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;