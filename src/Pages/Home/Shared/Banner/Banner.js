import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../../images/carousel/1.jpg';
import img2 from '../../../../images/carousel/2.jpg';
import img3 from '../../../../images/carousel/3.jpg';
import img4 from '../../../../images/carousel/4.jpg';
// import useAuth from '../../../../hooks/useAuth';
import NavbarBanner from '../Navbar/NavbarBanner';

const Banner = () => {
    // const { user } = useAuth();
    // console.log('email found', user.email);
    return (
        <div>
            <>             
            <NavbarBanner/>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                          
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Banner;