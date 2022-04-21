import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Shoe from '../Shoe/Shoe';

const Shoes = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/shoes')
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
                        products.map(product => <Shoe
                            key={product._id}
                            product={product}
                        ></Shoe>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Shoes;