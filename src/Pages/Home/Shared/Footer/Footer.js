import React from 'react';
import { Row, Col } from 'react-bootstrap';
import footerImg from '../../../../images/pay/footer-image-1.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="container">
                <Row xs={12} md={2} lg={4}>
                    <Col className="col-div">
                        <h4>Customer Services</h4>
                        <ul className='menu-list'>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Click & Collection</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">FAQ's</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Customer Assistance</h4>
                        <ul className="menu-list">
                            <li><a href="#">Track My Order</a></li>
                            <li><a href="#">Online Returns</a></li>
                            <li><a href="#">Shipping rates</a></li>
                            <li><a href="#">Returns & Exchanges</a></li>
                            <li><a href="#">Internation Shipping</a></li>
                        </ul>
                    </Col>
                    <Col>
                       Hello something
                    </Col>
                    <Col className="input-div">
                        <h4>Join The Club</h4>
                        <div className='input-div'>
                            <input type="Email" placeholder='Email Address' required />
                        </div>
                        <p>Sign me up to receive emails and new products arrivals offers and exclusive events.</p>
                        <img src={footerImg} className='img-fluid' alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;