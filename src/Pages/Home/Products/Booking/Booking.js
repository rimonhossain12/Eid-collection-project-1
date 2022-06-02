import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';
import {useParams } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Banner from '../../Shared/Banner/Banner';
import './Booking.css';
import { Button, Modal } from 'react-bootstrap';

const Booking = () => {
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);
    // const [orderProduct,setOrderProduct] = useState();
    const { register, handleSubmit,reset } = useForm();
    // const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { productId } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://desolate-sierra-72252.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [productId])

    // handle submit button 

    const onSubmit = (data) => {
        const newData = {
            ...data,
            productName:product.name,
            productRating:product.rating,
            productImg:product.images,
            price:product.price
        }
        console.log('new data',newData);
        // setOrderProduct(newData);
        /* fetch('https://desolate-sierra-72252.herokuapp.com/order', */
        fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                handleShow();
                <Button variant="primary" onClick={handleShow}></Button>
                reset();                
            }
        })
        // e.preventDefault();
    };

    // console.log('all the user order info',orderProduct);

    return (
        <>
            <Banner />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <div className="container">
                            <div className="mt-2">
                                <div className="shadow p-3 mb-5 bg-body div-height">
                                    <div className="image text-center">
                                        <figure>
                                            <img id="booking-img-style" src={product.images} className='img-fluid' style={{ width: '100%' }} alt="" />
                                        </figure>
                                        <h5 className='fw-lighter' style={{ color: '#22789A' }}>{product.name}</h5>
                                        <h5 className='fw-lighter' style={{ color: '#22789A' }}>{product.price}</h5>
                                        <h5 className='fw-lighter' style={{ color: '#22789A' }}>{product.country}</h5>
                                        <h6 className="fw-normal rating-style" style={{ color: '#05445D' }}>
                                            <ReactStars
                                                style={{ textAlign: 'center' }}
                                                classNames='user-icon icon-style'
                                                size={24}
                                                isHalf={true}
                                                edit={false}
                                                count={Number(product.rating)}
                                                value={Number(product.rating)}
                                                activeColor="#ffd700"
                                            />
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <h4>Please full fill the information</h4>
                        <div className="form-div">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("email")} className="w-75 form-control" value={user.email} />

                                <input {...register("name")} className="w-75 form-control" value={user.displayName} />

                                <input className="w-75 form-control" {...register("mobile")} required type="number" placeholder='your phone number' />

                                {/* <input className="w-75 form-control" {...register("district")} required placeholder='Enter your district' /> */}

                                <input className="w-75 form-control" {...register("quantity")} required type="number" placeholder='Quantity' />

                                <input className="w-75 form-control" type="text" {...register("district")} required placeholder='Your district' />

                                <textarea className="w-75 form-control" {...register("Present_Address")} required placeholder='Your Full Address' />

                                <button type="submit" className="w-75 form-control btn btn-primary mt-1" value='submit'>
                                    submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    Thank your for added new products.
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

export default Booking;