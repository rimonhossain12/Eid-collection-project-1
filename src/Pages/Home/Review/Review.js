import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from "swiper";
// import { Pagination } from "swiper";


// Import Swiper styles
import 'swiper/css';
import SingleReview from '../SingleReview/SingleReview';
import './Review.css';
import { Row } from 'react-bootstrap';



const Review = () => {
    // users review data 
    const [userReview, setUserReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/userReview')
            .then(res => res.json())
            .then(data => {
                setUserReview(data);
                console.log(data);
            })
    }, [])

    SwiperCore.use([Pagination,Autoplay])
    return (
        <div className='mt -5 slider-header'>
            <div className="slider-content">
                <h3 className='mt-5'>This is swiper js: {userReview.length}</h3>
                <>
                    <div class="col">
                        <div class="card">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
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