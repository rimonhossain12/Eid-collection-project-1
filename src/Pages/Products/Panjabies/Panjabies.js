import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Panjabi from '../Panjabi/Panjabi';

const Panjabies = () => {
    const [products,setProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/manProducts')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProducts(data)});
    },[])
    return (
        <div className='container'>
            <div className='mt-5'>
                <h2>Best EID ladies collections: {products.length}</h2>
            </div>
            <div className='container'>
                <Row xs={12} md={2} lg={4}>
                    {
                        products.map(product => <Panjabi
                            key={product._id}
                            product={product}
                        ></Panjabi>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Panjabies;