import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../hooks/useAuth';


const UserReview = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState(0);
    const [userReview, setUserReview] = useState({});
    const { register, handleSubmit, reset } = useForm();

    // for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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

    const onSubmit = (data, e) => {
        // console.log(data)
        const newInfo = {
            name: user.displayName,
            email: data.email,
            Rating: rating,
            comment: data.comments
        }
        console.log('total user opinion', newInfo);
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // alert('Thanks your for your comments');
                    handleShow();
                    <Button variant="primary" onClick={handleShow}>
                        Launch static backdrop modal
                    </Button>
                    reset();
                }
            })
        e.preventDefault();
    };
    return (
        <>
            <div className='container'>
                <h2 className='fw-bold fs-2'>Give A Review</h2>
                <div className="row mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-sm-12 col-md-8">
                            <p className='fw-bold text-start mb-1'>Your name</p>
                            <input type="text" className='w-75 form-control'
                                {...register("userName")}
                                defaultValue={user.displayName} />
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
                            <input type="email" 
                            className="mt-2 form-control" name='email'
                            required
                            {...register("email")}
                            placeholder='your Email' 
                            onChange={handleOnChange} />
                        </div>
                        <div className='w-75'>
                            <textarea type="text" 
                            className="mt-2 form-control" name="comments"
                            required
                            {...register("comments")}                            
                                onChange={handleOnChange} 
                                placeholder='write something' />
                        </div>
                        <div className='mt-2'>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <h5>Thank you for your valuable information.
                        Your one feedback give developers many motivation. </h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="mx-auto" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UserReview;