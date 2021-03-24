import React from 'react';
import { Container } from 'react-bootstrap';

import '../css/AboutMe.css';
import { aboutMeDescription, aboutMeQuote } from '../EditMe';

function AboutMe() {
    return (
        <div className="aboutme-container">
            <div className="main">
                {aboutMeDescription}
            </div>
            <div className="sub-quote">
                {aboutMeQuote}
            </div>
        </div>
    );
}

export default AboutMe;