import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleShart from '../SingleShart/SingleShart';

const Sharts = () => {
    const [products,setProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/shart')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProducts(data);
        })
    },[])
    return (
        <div className='container'>
            <div className='mt-5'>
                <h2>Best EID ladies collections</h2>
            </div>
            <div className='container'>
                <Row xs={12} md={2} lg={4}>
                    {
                        products.map(product => <SingleShart
                            key={product._id}
                            product={product}
                        ></SingleShart>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Sharts;