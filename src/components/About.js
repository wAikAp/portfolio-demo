import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import dev from '../images/dev.jpeg';
import logo_polyu from '../images/polyu_logo.png';
import logo_ngis from '../images/ngis_logo.png';

import '../css/about.css';

library.add(fas);

const About = () => {
    return(
        <Container fluid id='about'>
            <Col id='aboutbg' className='bgimg' ></Col>
            <Row id='about-content'>
                <Col sm={6} md={5} lg={{span: 4, offset: 1}}>
                    <img 
                        className='myImg'
                        src={dev} 
                        alt="My image" 
                    />
                </Col>
                <Col className='introduction' sm={9} md={10} lg={{ span: 5, offset: 1}}>
                    <h1 className='typing'>Hi! I am William</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td> <img src={logo_polyu} width="250" /></td>
                                <td> <img src={logo_ngis} height={"56"} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 className='m-2' style={{fontWeight: "300"}}>
                        I graduated from 
                        <br/><b className='text-danger font-weight-bold'>Hong Kong Polytechnic University </b><br/><br/>
                        <b className='font-weight-bolder'>An Analyst Programmer (Technical Lead)</b> Working at N<b className="text-success h4">G</b>IS

                        <br /> <br />C#/PHP are my main programming languages. 
                    </h4>
                    <div className='blockquote-div blockstyle'>
                        <blockquote className="blockquote mb-0 ">
                                With great power comes great responsibility
                            </blockquote>
                            <cite>--Uncle Ben</cite>
                    </div>
                </Col>    
                <Col sm={12} md={12} className='scrolldiv'>
                    <a href='#project'>
                        <FontAwesomeIcon icon="fa-solid fa-angles-down" size='2x' /><br/>
                        Scroll down <br/> see my project <br/> and my familiar area</a>
                    
                </Col>            
            </Row>
            
            
        </Container>
    );
};

export default About;
