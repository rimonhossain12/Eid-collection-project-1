import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import eidLogo from '../../../../images/site-images/eid2.jpg';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';

const NavbarBanner = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
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
                            {/* <Nav.Link as={HashLink} to="/AddProduct#AddProduct" style={{ color: 'white' }}>AddProduct</Nav.Link> */}
                            <Nav.Link as={HashLink} to="/DashBoard#DashBoard" style={{ color: 'white' }}>DashBoard</Nav.Link>
                            {
                                user.email ? <Nav.Link onClick={logOut} style={{ color: 'white' }}>LogOut</Nav.Link> :
                                    <Nav.Link as={HashLink} to="/register#register" style={{ color: 'white' }}>Login</Nav.Link>
                            }
                            {/* <p style={{color:'white'}}>{user.displayName}</p> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarBanner;