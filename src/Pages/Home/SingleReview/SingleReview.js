import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import ReactStars from 'react-rating-stars-component';

const SingleReview = ({ review }) => {
    const { name, email, rating, comment } = review;
    let newRating = rating;
    return (
        <Card style={{ minHeight: "375px", width: '100%' }} className="my-4 shadow p-3 mb-5 bg-body rounded">
            <Card.Body className="text-center">
                <h5>
                    {name} <br />
                </h5>
                <h5>{email}</h5>
                <h6>
                    Rating:
                    <Rating
                        className="text-warning"
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating={rating}
                        readonly
                    />{" "}
                    {rating}
                </h6>
                {/* <h6> */}
                <ReactStars
                    style={{ textAlign: 'center' }}
                    classNames='user-icon'
                    size={24}
                    isHalf={true}
                    edit={false}
                    count={Number(newRating)}
                    value={Number(newRating)}
                    activeColor="#ffd700"

                />
                {rating}
                {/* </h6> */}
                <Card.Text>{comment?.slice(0, 140)}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleReview;