
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const ContactMe = () => {
    return(
        <Container fluid id='contact' style={{backgroundColor: "#343a40", padding: "20px", paddingBottom: "40px"}}>
            <h1 className='title'>More Infomation</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={6} md={3} lg={3} style={{display: 'flex', justifyContent: 'center'}}>
                    <SocialIcon url='https://www.linkedin.com/in/shing-wai-chan-06824a188/' style={{width: "66px", height: "66px"}} />
                </Col>
                <Col sm={6} md={3} lg={3} style={{display: 'flex', justifyContent: 'center'}}>
                    <SocialIcon url='https://github.com/wAikAp' fgColor="#dee2e6" style={{width: "66px", height: "66px"}} />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactMe;
