import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';

const Booking = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

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

                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;