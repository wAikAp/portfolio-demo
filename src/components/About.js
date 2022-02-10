import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import dev from '../images/dev.jpeg';
import logo_polyu from '../images/polyu_logo.png';
import logo_ngis from '../images/ngis_logo.png';
import '../css/about.css';

const About = () => {
    return(
        <Container fluid style={{height: "65vh"}} id="about">
            <h1 style={{width: "100%", textAlign: "center", margin: "20px 0"}}>About me</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>
                <Col sm={6} md={5} lg={{span: 4, offset: 1}}>
                    <img 
                        src={dev} 
                        alt="Software Developer" 
                        style={{
                            width: "100%", 
                            boxShadow: "2px 2px 5px #001",
                            borderRadius: "20px"
                        }}
                    />
                </Col>
                <Col sm={9} md={10} lg={{ span: 5, offset: 1}}>
                    <h1>Hi! I am William
                    </h1>
                    <img src={logo_polyu} width="250" />
                    <img src={logo_ngis} height={"56"} />
                    <h4 style={{fontWeight: "300"}}>
                        I am a <b>Hong Kong Polytechnic Uuniversity's Student / NGIS Limited's Software Engineer</b>
                        <br /> <br />.Net/PHP are my main programming languges. 
                    </h4>
                    <div className='blockquote-div blockstyle'>
                    <blockquote className="blockquote mb-0 ">
                            With great power comes great responsibility
                        </blockquote>
                        <cite>--Uncle Ben</cite>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
