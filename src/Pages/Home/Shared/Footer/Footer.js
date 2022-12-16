import React from 'react';
import footerImg from '../../../../images/pay/footer-image-1.png';
import {useForm} from 'react-hook-form';
import './Footer.css';

const Footer = () => {
    const {register,handleSubmit,reset} = useForm();
    const onSubmit = (data, e) => {
        fetch('https://eid-collection-server1.onrender.com/subscribed',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Thank you! for your subscribed');
                reset();
            }
        })
        e.preventDefault();
    }
    
    return (
        <div className='footer-container'>
            <div className="container mt-5 py-4">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <div className='col'>
                        <h4>Customer Service</h4>
                        <ul className="menu-list">
                            <li><a href="/home">Contact us</a></li>
                            <li><a href="/home">Shipping</a></li>
                            <li><a href="/home">Click & Collect</a></li>
                            <li><a href="/home">Returns</a></li>
                            <li><a href="/home">FAQ's</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Customer Assistance</h4>
                        <ul className="menu-list">
                            <li><a href="/home">Track My Order</a></li>
                            <li><a href="/home">Online Returns</a></li>
                            <li><a href="/home">Shipping rates</a></li>
                            <li><a href="/home">Returns & Exchanges</a></li>
                            <li><a href="/home">InternationalShipping</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Follow E-commerce</h4>
                        <div className="social-div">
                            <div className="menu-list">
                                <li><a href="/home"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="/home"><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="/home"><i className='fa-brands fa-instagram'></i> Instagram</a></li>
                                <li><a href="/home"><i className='fa-brands fa-linkedin'></i> linkedin</a></li>
                                <li><a href="/home"><i className='fa-brands fa-discord'></i> Discord</a></li>
                            </div>
                        </div>
                    </div>
                    <div className='col input-div'>
                        <h4>Join The Club</h4>
                        <div className='input'>
                            <form className='d-flex' onSubmit={handleSubmit(onSubmit)}>
                                <input type="text"
                                    {...register("email")}
                                    className='rounded-0 form-control'
                                    placeholder='Enter your Email'
                                    required
                                />
                                <button
                                    type='submit'
                                    className='btn btn-primary rounded'
                                    style={{ marginLeft: -10 }}>subs</button>
                            </form>
                        </div>
                        <p>Sign me up to receive emails and new products arrivals offers and exclusive events.</p>
                        <img src={footerImg} className='img-fluid w-75 mb-0' align="left" alt="" />
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Footer;