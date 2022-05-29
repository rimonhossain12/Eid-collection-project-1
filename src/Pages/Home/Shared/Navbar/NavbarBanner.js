import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import eidLogo from '../../../../images/site-images/eid2.jpg';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';
import './NavbarBanner.css';

const NavbarBanner = () => {
    const { user, logOut } = useAuth();
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
                            <Nav.Link as={HashLink} to="/allProducts#allProducts" style={{ color: 'white' }}>Products</Nav.Link>
                            <Nav.Link as={HashLink} to="/DashBoard#DashBoard" style={{ color: 'white' }}>DashBoard</Nav.Link>
                            {user.email ? <Nav.Link className='nav-style'>
                                <button onClick={logOut} className='btn btn-primary badge rounded-pill bg-primary btn-style'>Logout</button>
                            </Nav.Link> :

                                <Nav.Link as={HashLink} to="/login#login" className='nav-style'>
                                    <button className='btn btn-primary badge rounded-pill bg-primary btn-style'>Login</button>
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarBanner;