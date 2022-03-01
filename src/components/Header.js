import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';



const Header = () => {
    return (
        <Navbar expand="lg" sticky="top" variant="dark" className="py-4" collapseOnSelect>
            
            <Container fluid="md">
                <Navbar.Brand href="/portfolio-demo" style={{fontSize:"26px", borderRight:"2px solid grey", padding:"0 10px"}}>Chan Shing Wai, William</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{padding: "0 10px"}}
                        navbarScroll
                    >
                        <Nav.Link className='navlink' href="#about">About</Nav.Link>
                        <Nav.Link className='navlink' href="#project">Projects</Nav.Link>
                        <Nav.Link className='navlink' href="#skill">Skills</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
