import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PieChart } from 'react-minimal-pie-chart';

import '../css/Skills.css';

import { } from '@fortawesome/free-solid-svg-icons'

import { skills } from '../EditMe';

function Skills() {

    return (
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    <PieChart
                    data={skills.skillsData}
                    label={({ dataEntry }) => dataEntry.title}
                    labelStyle={(index) => ({
                        fill: skills.skillsData[index].color,
                        fontSize: skills.fontSize,
                    })}
                    radius={skills.radius}
                    labelPosition={skills.labelPosition}
                    lineWidth={skills.lineWidth}
                    paddingAngle={skills.paddingAngle}
                    />
                </Col>
                <Col xs={12} sm={6}>

                </Col>
            </Row>
        </Container>
    );
}

export default Skills;