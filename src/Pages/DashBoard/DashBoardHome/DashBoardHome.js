import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import NavbarBanner from '../../Home/Shared/Navbar/NavbarBanner';
import './DashBoardHome.css';

const DashBoardHome = () => {
    const { isAdmin } = useAuth();
    return (
        <>
            <NavbarBanner />
            <Container className='mt-5'>
                <Row>
                    <Col sm={12} md={2}>
                        <Link className='nav-link fw-bold text-start nav-style' to="/DashBoard/userOrder">My Orders</Link>
                        
                        {
                            isAdmin && <>
                                <Link className='nav-link fw-bold text-start nav-style' to="/DashBoard/addProducts">Add Products</Link>
                                <Link className='nav-link fw-bold text-start nav-style' to="/DashBoard/makeAdmin">Make Admin</Link>
                                <Link className='nav-link fw-bold text-start nav-style' to="/DashBoard/allOrders">All Orders</Link>
                            </>
                        }
                       
                    </Col>
                    <Col sm={12} md={10} className="ms-0">
                        <Outlet></Outlet>
                        {
                            isAdmin && <>
                                <output></output>
                                <output></output>
                                <output></output>
                            </>
                        }
                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default DashBoardHome;