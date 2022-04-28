import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import eidLogo from '../../../../images/site-images/eid2.jpg';
import { HashLink } from 'react-router-hash-link';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../../images/carousel/1.jpg';
import img2 from '../../../../images/carousel/2.jpg';
import img3 from '../../../../images/carousel/3.jpg';
import img4 from '../../../../images/carousel/4.jpg';
import useAuth from '../../../../hooks/useAuth';

const Banner = () => {
    const { user, logOut} = useAuth();
    console.log('email found',user.email);
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src={eidLogo}
                                width="50"
                                height="50"
                                style={{ borderRadius: '50%' }}
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={HashLink} to="/home#home" style={{ color: 'white' }}>Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/products#products" style={{ color: 'white' }}>Products</Nav.Link>
                                <Nav.Link as={HashLink} to="/AddProduct#AddProduct" style={{ color: 'white' }}>AddProduct</Nav.Link>
                                <Nav.Link as={HashLink} to="/register#register" style={{ color: 'white' }}>Register</Nav.Link>
                                {
                                    user?.email ? <Nav.Link as={HashLink} onClick={logOut} style={{ color: 'white' }}>LogOut</Nav.Link>
                                    :
                                        <Nav.Link as={HashLink} to="/login#login" style={{ color: 'white' }}>Login</Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Banner;