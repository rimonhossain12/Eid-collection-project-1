import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import eid  from '../../../images/site-images/eid.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={eid}
                            width="60"
                            height="60"
                            style={{borderRadius:'50%'}}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" style={{color:'white'}}>Home</Nav.Link>
                            <Nav.Link href="#link" style={{ color: 'white' }}>Product</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Banner;