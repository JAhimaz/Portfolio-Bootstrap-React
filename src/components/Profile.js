import React from 'react';

import { Container, Col, 
    Row } from 'react-bootstrap';

import '../css/Profile.css';

import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Value Import
import { fullName, welcomeMsg, aboutMe, companyName, profilePhoto,
            twitterURL, linkedinURL, githubURL,
        } from '../EditMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        <img className="profile-img" src={profilePhoto} alt="profile-image"></img>
                    </div>
                    <a target="_blank" href={twitterURL} className="profile-twitter">
                        <FontAwesomeIcon icon = { faTwitter } />
                    </a>
                    <a target="_blank" href={githubURL} className="profile-github">
                        <FontAwesomeIcon icon = { faGithub } />
                    </a>
                    <a target="_blank" href={linkedinURL} className="profile-linkedin">
                        <FontAwesomeIcon icon = { faLinkedin } />
                    </a>
                </Col>
                <Col className="column-status" xs={12} lg={4}>
                    <p className="lower-profile-text">{aboutMe}</p>
                    <p className="lower-profile-text-sub">{companyName}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;