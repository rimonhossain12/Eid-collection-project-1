import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Ladie from '../Ladie/Ladie';

const Ladies = () => {
    const [products,setProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/allProducts')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='container'>
            <div className='mt-5'>
                <h2>Best EID ladies collections</h2>
            </div>
            <div className='container'>
                <Row xs={12} md={2} lg={4}>
                    {
                        products.map(product => <Ladie
                            key={product._id}
                            product={product}
                        ></Ladie>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Ladies;