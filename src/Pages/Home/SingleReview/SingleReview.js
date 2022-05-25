import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import profileImg from '../../../images/testimonial/user.png';
import './SingleReview.css';

const SingleReview = ({ review }) => {
    const { name, email, Rating, comment } = review;
    console.log(review);
    // console.log(rating);
    // let newRating = rating;
    return (
        <Card style={{ minHeight: "375px", width: '100%' }} className="my-4 shadow p-3 mb-5 bg-body rounded">
            <img src={profileImg} className="img-fluid w-25 mx-auto" alt="" />
            <Card.Body className="text-center">
                <h5>
                    {name} <br />
                </h5>
                <h5>{email}</h5>
                <div className='mx-auto rating-div'>
                    <ReactStars
                        classNames='inline-block'
                        size={24}
                        isHalf={true}
                        edit={false}
                        count={Number(Rating)}
                        value={Number(Rating)}
                        activeColor="#ffd700"
                    />
                </div>
                <h6 className="fw-normal text-center mx-auto" style={{ color: '#05445D' }}>
                   
                </h6>
                <Card.Text>{comment?.slice(0, 140)}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleReview;