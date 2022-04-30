import React from 'react';
import { Col, Row } from 'react-bootstrap';
import footerImg from '../../../../images/site-images/eid2.jpg';
import './Footer.css';

const Footer = () => {
    return (
       <div className='footer-bg'> 
            <div className='container mt-5'>
                <Row xs={12} md={2} lg={4}>
                    <Col className="mt-5">
                        <p className='fs-5'>Eid E-commerce</p>
                        <img
                            src={footerImg}
                            width="70"
                            height="70"
                            style={{ borderRadius: '50%' }}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <p>React Eid-E-Commerce</p>
                    </Col>
                    <Col className='mt-5'>
                        <p className='fs-5 text-start'>Office Location</p>
                        <ul>
                            <li>SS Road Sirangajn</li>
                            <li>Rimon Plaza, Floar 2nd</li>
                            <li>arecommerce@info.com</li>
                            <li>Hot line: 12649</li>
                        </ul>
                    </Col>
                    <Col className='mt-5'>
                        <p className='fs-5 text-start'>Social Link</p>
                       <ul>
                            <li>facebook</li>
                            <li>Youtube</li>
                            <li>Instagram</li>
                            <li>LinkDin</li>
                       </ul>
                    </Col>
                    <Col className='mt-5'>
                        <p>pay with</p>
                    </Col>
                </Row>
            </div>
       </div>
    );
};

export default Footer;