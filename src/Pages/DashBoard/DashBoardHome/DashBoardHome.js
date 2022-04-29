import React from 'react';
import { Col ,Row } from 'react-bootstrap';
import NavbarBanner from '../../Home/Shared/Navbar/NavbarBanner';

const DashBoardHome = () => {
    return (
       <>
         <NavbarBanner/>
            <div className='container mt-5'>
                <Row>
                    <Col xs={12} md={8}>
                        DashBoard Controller
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