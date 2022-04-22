import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';

const Booking = () => {
    const { productId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [productId])

    return (
        <>
            <Banner />
            <div className='container'>
                <p className='mt-5 fs-3 text-secondary'>Please Full fill your information: {productId}</p>
                <div className='mt-5'>
                    <Row>
                        <Col xs={12} md={6}>
                            .col-xs-12 .col-md-8
                        </Col>
                        <Col xs={12} md={6}>
                            .col-xs-12 .col-md-8
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Booking;