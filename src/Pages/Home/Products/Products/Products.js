import React, { useEffect, useState } from 'react';
import { Row,Button } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount,setPageCount] = useState(0);
    // const [displayProducts, setDisplayProducts] = useState([]);
    const size = 10;

    useEffect(() => {
        fetch(`https://desolate-sierra-72252.herokuapp.com/productsLimit?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                // setDisplayProducts(data.products);
                setProducts(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);


    return (
        <div className='product-list mt-5 mb-5'>
            <div className='container'>
                <h2 className='fw-bold text-primary fs-4'>Our Best Eid Collections</h2>
                <hr className='mx-auto w-25 text-danger' />
            </div>
            <div className='container'>
                <Row xs={1} md={2} lg={4}>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </div>
            <div className="container pagination">
            <div className='mx-auto'>
                    {
                        [...Array(pageCount).keys()].map(number =>
                            <Button 
                                key={number}
                                variant="secondary"
                                className={number === page ? 'selected' : ' '}
                                onClick={() => setPage(number)}
                            >{number + 1}</Button >)
                    }
            </div>
              
            </div>
        </div>
    );
};

export default Products;