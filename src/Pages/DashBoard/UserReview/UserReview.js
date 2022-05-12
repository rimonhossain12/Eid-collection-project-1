import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../hooks/useAuth';

const UserReview = () => {
    const {user} = useAuth();
    const [rating, setRating] = useState(0);
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRating(newRating);
    };
    return (
        <div className='container'>
            <h2 className='fw-bold fs-2'>Give A Review</h2>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-8">
                    <p className='fw-bold text-start mb-1'>Your name</p>
                    <input type="text" className='w-75 form-control' defaultValue={user.displayName} />
                </div>
                <div className="col-sm-12 col-md-4 mt-3">
                    <div className='d-inline'>
                        <ReactStars
                            style={{display:'inline-block'}}
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className='d-inline'>
                        <h5 className='fw-5'>Your rating: {rating}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;