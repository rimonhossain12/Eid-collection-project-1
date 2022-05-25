import React from 'react';
import { Col, Row } from 'react-bootstrap';
import restImg from '../../../images/Reset/rest.jpg';

const ResetPassword = () => {
    return (
        <div>
            <div className="container mt-5">
                <Row className="g-4">
                    <Col sm={12} md={6}>
                        <img src={restImg} className="img-fluid" alt="" />
                    </Col>
                    <Col sm={12} md={6} className="mt-5">
                        <form>
                            <input type="email" placeholder='Enter your email' className='form-control w-75' required/><br />
                            <input type="submit" />
                        </form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ResetPassword;