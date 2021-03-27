import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/Portfolio.css';

import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

import { portfolioCards } from '../EditMe';

function Portfolio() {
    return (
        <Container className="portfolio-container">
            <Row style={{justifyContent:"center"}}>
                {portfolioCards.map((card) => 
                    <Col xs={12} md={6} lg={4} className="portfolio-card">
                        <div className="card-info">
                            <Row>
                                <Col xs={10} className="card-title">{card.projectTitle}</Col>
                                <Col xs={2} className="card-external-url"><a href={card.projectURL} className="url-icon"><FontAwesomeIcon icon = { faExternalLinkAlt } /></a></Col>
                            </Row>
                            <Row>
                                <Col className="card-desc">{card.projectDesc}</Col>
                            </Row>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Portfolio;