import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
        
    return (
        <div className='product-list mt-5 mb-5'>
            <div className='container'>
                <h2 className='fw-bold text-primary fs-4'>Our Best Eid Collections</h2>
                <hr className='mx-auto w-25 text-danger' />
            </div>
            <div className='container'>
                <Row xs={2} md={3} lg={4}>
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