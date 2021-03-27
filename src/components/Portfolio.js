import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../css/Portfolio.css';

import { portfolioCards } from '../EditMe';

function Portfolio() {
    return (
        <Container className="portfolio-container">
            <Row style={{justifyContent:"center"}}>
                {portfolioCards.map((card) => 
                    <Col xs={12} sm={4} className="portfolio-card">
                        <div className="card-info" style={{backgroundColor: card.backgroundColour}}>
                            <Row>
                                <Col xs={10} className="card-title">{card.projectTitle}</Col>
                                <Col xs={2} className="card-external-url"><a href={card.projectURL}>a</a></Col>
                            </Row>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Portfolio;