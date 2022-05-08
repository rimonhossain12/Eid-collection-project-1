import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const DashBoardHome = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col sm={12} md={3}>
                        <Link to="/DashBoard/userOrder">My Orders</Link> <br />
                        <Link to="/DashBoard/allOrders">All Orders</Link> <br />
                        <Link to="/DashBoard/addProducts">Add Products</Link> <br />
                        <Link to="/DashBoard/makeAdmin">Make Admin</Link> <br />
                    </Col>
                    <Col sm={12} md={9}>
                        <Outlet></Outlet>
                        <output></output>
                        <output></output>
                        <output></output>
                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default DashBoardHome;