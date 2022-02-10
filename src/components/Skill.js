
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import skill from '../images/skill.png';
import '../css/skill.css';

library.add(fab);
library.add(fas);
const Skills = () => {
    return(
        <Container fluid id="skill" style={{padding: "20px"}}>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px"}}>Skills</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <FontAwesomeIcon icon="fa-solid fa-globe" size='3x' className='tick' />
                        
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Web Development</h4>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <FontAwesomeIcon icon="fa-brands fa-app-store-ios" size='3x' className='tick' />
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>App Development</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <FontAwesomeIcon icon="fa-solid fa-chart-line"  size='3x' className='tick' />
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Data Science</h4>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        
                        <FontAwesomeIcon icon="fa-solid fa-microchip" size='3x' className='tick' />
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Machine Learning</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <FontAwesomeIcon icon="fa-solid fa-code-fork" size='3x' className='tick'  />
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Software Engineering</h4>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                    <FontAwesomeIcon icon="fa-solid fa-infinity" size='3x' className='tick' />
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>DevOps</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;
