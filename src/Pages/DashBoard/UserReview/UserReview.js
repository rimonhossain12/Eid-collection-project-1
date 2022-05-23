import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../hooks/useAuth';


const UserReview = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState(0);
    const [userReview, setUserReview] = useState({});
    const [updateReview, setUpdateReview] = useState();


    const ratingChanged = (newRating) => {
        setRating(newRating);
    };
    
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const updatedInfo = { ...userReview };
        updatedInfo[name] = value;
        setUserReview(updatedInfo)
    }

    const handleSubmit = (e) => {
        const newInfo = {
            name:user.displayName,
            email:userReview.email,
            Rating:rating,
            comment:userReview.comments
        }
        setUpdateReview(newInfo);
        console.log('total user opinion', updateReview);
        fetch('/url',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log('response form server',data);
        })
        e.preventDefault();
    }

    return (
        <div className='container'>
            <h2 className='fw-bold fs-2'>Give A Review</h2>
            <div className="row mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="col-sm-12 col-md-8">
                        <p className='fw-bold text-start mb-1'>Your name</p>
                        <input type="text" className='w-75 form-control' defaultValue={user.displayName} />
                    </div>
                    <div className="col-sm-12 col-md-4 mt-3">
                        <div className='d-inline'>
                            <ReactStars
                                style={{ display: 'inline-block' }}
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
                            <h5 className='fw-5 mb-2'>Your rating: {rating}</h5>
                        </div>
                    </div>
                    <div className='w-75 mb-4'>
                        <input type="email" className="mt-2 form-control" name='email' placeholder='your Email'  onChange={handleOnChange} />
                    </div>
                    <div className='w-75'>
                        <textarea type="text" className="mt-2 form-control" name="comments" onChange={handleOnChange} placeholder='write something' />
                    </div>
                    <div className='mt-2'>
                        <input type="submit" className='btn btn-primary' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserReview;