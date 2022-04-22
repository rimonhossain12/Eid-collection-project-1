import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setProducts(data);
        })
    },[])
    return (
        <div className='container'>
            <div className='mt-5'>
                <h2>Best EID ladies collections: {products.length}</h2>
            </div>
            <div className='container'>
                <Row xs={12} md={2} lg={4}>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Products;