import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Home/Shared/Footer/Footer';
import NavbarBanner from '../Home/Shared/Navbar/NavbarBanner';
import SingleProducts from '../SingleProducts/SingleProducts';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <NavbarBanner />
            <div className='container mt-5'>
                <div className='product-list mt-5 mb-5'>
                    <div className='container'>
                        <h2 className='fw-bold text-primary fs-4'>Our Best Eid Collections</h2>
                        <hr className='mx-auto w-25 text-danger' />
                    </div>
                    <div className='container'>
                        <Row xs={2} md={3} lg={4}>
                            {
                                products.map(product => <SingleProducts
                                    key={product._id}
                                    product={product}
                                ></SingleProducts>)
                            }
                        </Row>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllProducts;