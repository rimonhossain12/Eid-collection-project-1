import React from 'react';
import { Col ,Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavbarBanner from '../../Home/Shared/Navbar/NavbarBanner';

const DashBoardHome = () => {
    return (
       <>
         <NavbarBanner/>
            <div className='container mt-5'>
                <Row>
                    <Col xs={12} md={8}>
                        <h2>This is DashBoard Home</h2>
                        {/* <NavLink to="" id='nav-style' style={{ textDecoration: 'none' }}>Already Register? Please Login</NavLink> */}
                        <NavLink to="/AllOrders" id='nav-style' style={{ textDecoration: 'none' }}>Already Register? Please Login</NavLink>
                        <NavLink to="/UserOrders" id='nav-style' style={{ textDecoration: 'none' }}>Already Register? Please Login</NavLink>
                    </Col>
                    <Col xs={6} md={4}>
                        DashBoard Shower
                    </Col>
                </Row>
            </div>
       </>
    );
};

export default DashBoardHome;