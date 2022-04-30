import React from 'react';
import { Col ,Row } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
import NavbarBanner from '../../Home/Shared/Navbar/NavbarBanner';
import AllOrders from '../AllOrders/AllOrders';
import UserOrders from '../UserOrder/UserOrders';

const DashBoardHome = () => {
    return (
       <>
         <NavbarBanner/>
            <div className='container mt-5'>
                <Row>
                    <Col xs={12} md={8}>
                        <h2>This is DashBoard Home</h2>
                        {/* <NavLink to="" id='nav-style' style={{ textDecoration: 'none' }}>Already Register? Please Login</NavLink> */}
                        {/* <NavLink to="/AllOrders" id='nav-style' style={{ textDecoration: 'none' }}>Already Register? Please Login</NavLink> */}
                        {/* <NavLink to="/UserOrders" id='nav-style' style={{ textDecoration: 'none' }}>Already Register? Please Login</NavLink> */}
                        <p>All orders history</p>
                        <AllOrders />
                        <p>Search By Email</p>
                        <UserOrders />
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