import React from 'react';

import '../css/AboutMe.css';
import { aboutMe } from '../EditMe';

function AboutMe() {
    return (
        <div className="aboutme-container">
            <div className="main">
                {aboutMe.description}
            </div>
            <div className="sub-quote">
                {aboutMe.quote}
            </div>
        </div>
    );
}

export default AboutMe;