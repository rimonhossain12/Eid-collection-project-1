import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Banner from '../../Shared/Banner/Banner';
// import './Booking.css';

const Booking = () => {
    const {user} = useAuth();
    console.log('user found',user.email);
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                console.log(data);
            })
    }, [productId])

    return (
        <>
            <Banner />
            <div className='container mt-5'>
                <div class="row">
                    <div class="col-sm-12 col-md-5">
                        <div className='container'>
                            <div className='mt-2'>
                                <div className="shadow p-3 mb-5 bg-body rounded div-height">
                                    <div className="image text-start">
                                        <div id="zoom-In">
                                            <figure>
                                                <img id="img-style" src={product.images} className='img-fluid' style={{ width: '100%' }} alt="" />
                                            </figure>
                                            <h5 className="fw-lighter" style={{ color: '#22789A' }}>{product.name}</h5>
                                            <p className='fw-normal text-start'>{product.price}</p>
                                            <h6 className="fw-normal" style={{ color: '#05445D' }}>
                                                <ReactStars
                                                    style={{ textAlign: 'center' }}
                                                    classNames='user-icon'
                                                    size={24}
                                                    isHalf={true}
                                                    edit={false}
                                                    count={Number(product.rating)}
                                                    value={Number(product.rating)}
                                                    activeColor="#ffd700"
                                                />
                                            </h6>
                                            <p className='fw-normal text-start'>{product.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ol-sm-12 col-md-7">
                        <div className='form-div'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder='product name' required className='form-control w-75'{...register("name")} />
                                <input placeholder='product images' required className='form-control w-75'{...register("images")} />
                                <input placeholder='product price' required className='form-control w-75' {...register("price")} />
                                <input placeholder='product Rating' required className='form-control w-75' {...register("rating")} />
                                <input placeholder='product country' required className='form-control w-75' {...register("country")} />
                                <button type="submit" required className="btn btn-secondary w-75 mt-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;