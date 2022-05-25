import { Carousel } from 'bootstrap';
import React from 'react';
import img1 from '../../images/carousel/1.jpg';
import img2 from '../../images/carousel/2.jpg';
import img3 from '../../images/carousel/3.jpg';
import img4 from '../../images/carousel/4.jpg';

const Slider = () => {
    return (
        <div className='mt-5'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;