import React from 'react';
import footerImg from '../../../../images/pay/footer-image-1.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container p-4'>
           <div className="container"> 
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <div className='col'>
                        <h4>Customer Service</h4>
                        <ul className="menu-list">
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Click & Collect</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">FAQ's</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Customer Assistance</h4>
                        <ul className="menu-list">
                            <li><a href="#">Track My Order</a></li>
                            <li><a href="#">Online Returns</a></li>
                            <li><a href="#">Shipping rates</a></li>
                            <li><a href="#">Returns & Exchanges</a></li>
                            <li><a href="#">Internation Shipping</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Follow E-commerce</h4>
                        <div className="social-div">
                            <div className="menu-list">
                                <li><a href="#"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="#"><i className='fa-brands fa-instagram'></i> Instragram</a></li>
                                <li><a href="#"><i className='fa-brands fa-linkedin'></i> linkedin</a></li>
                                <li><a href="#"><i className='fa-brands fa-discord'></i> Discord</a></li>
                            </div>
                        </div>
                    </div>
                    <div className='col input-div'>
                        <h4>Join The Club</h4>
                        <div className='input'>
                           <form action="#" className='email-form'>
                               <input type="email" className='input-btn' placeholder='Enter your email'/>
                               <button type="submit" className='submit-btn'>submit</button>
                           </form>
                        </div>
                        <p>Sign me up to receive emails and new products arrivals offers and exclusive events.</p>
                        <img src={footerImg} className='img-fluid w-75' align="left" alt="" />
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Footer;