import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount,setPageCount] = useState(0);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/productsLimit')
            .then(res => res.json())
            .then(data => {
                setDisplayProducts(data.products);
                setProducts(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / 10);
                setPageCount(pageNumber);
            });
    }, [])

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
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number => 
                            <button
                               key={number}
                               className={number === page  ? 'selected': ' '}
                               onClick={() => setPage(number)}
                            >{number+1}</button>)
                        }
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default Products;