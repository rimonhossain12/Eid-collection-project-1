import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from "swiper";
// import { Pagination } from "swiper";
// import img from '../../../images/testimonial/user.png';


// Import Swiper styles
import 'swiper/css';
import SingleReview from '../SingleReview/SingleReview';
import './Review.css';
import { Row } from 'react-bootstrap';



const Review = () => {
    // users review data 
    const [userReview, setUserReview] = useState([]);
    useEffect(() => {
        fetch('https://desolate-sierra-72252.herokuapp.com/userReview')
            .then(res => res.json())
            .then(data => {
                setUserReview(data);
                console.log(data);
            })
    }, [])

    SwiperCore.use([Pagination,Autoplay])
    return (
        <div className='mt-5 slider-header mb-5'>
            <div className="slider-content">
                <h2 className='fw-bold text-primary fs-4'>What our clients says about us</h2>
                <hr className='mx-auto w-25 text-danger' />
                <>
                    <div class="col">
                        <div class="card">
                            <Swiper
                            breakpoints={{
                                640:{
                                    slidesPerView:1,
                                    spaceBetween:10
                                },
                                768:{
                                    slidesPerView:3,
                                    spaceBetween:10
                                },
                                1024:{
                                    slidesPerView:4,
                                    spaceBetween:30
                                }
                            }}                               
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                                autoplay={{
                                    delay:2500
                                }}
                            >
                                <Row xs={2} md={2} lg={3}>
                                {
                                   
                                    userReview.map((review => {
                                        return (
                                        <SwiperSlide key={review._id}>
                                            <SingleReview review={review} />
                                        </SwiperSlide>
                                        )
                                    }))                                   
                                }
                                </Row>
                            </Swiper>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Review;