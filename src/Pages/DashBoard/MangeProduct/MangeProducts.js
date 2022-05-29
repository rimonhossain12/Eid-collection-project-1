import React, { useEffect, useState } from 'react';
const MangeProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
                console.log(data);
            }
            );
    }, [])
    // handle delete btn
    const handleOnClick = (id) => {
        // alert('button is click')
        const isDelete = window.confirm('Are your sure delete this item?');
        const url = `http://localhost:5000/deleteProduct/${id}`;
        if (isDelete) {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(allProducts)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    alert('data is deleted');
                    const remainingProducts = allProducts.filter(product => product._id !== id);
                    setAllProducts(remainingProducts);
                })
        }

    }
    return (
        <div>
            <h2 className='text-primary fs-5 text-center my-3'>All Products Collections list</h2>
            <div style={{ marginLeft: '50px' }}>
                <div className='table-responsive'>
                    <table id='customer'>
                        <thead>
                            <tr>
                                <th>IMG</th>
                                <th>ProductName</th>
                                <th>price</th>
                                <th>Rating</th>
                                <th>Country</th>
                                <th>Deletion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allProducts.map((order, index) => <>
                                    <tr key={order._id}>
                                        <td><img src={order.images} style={{ height: '50px', width: '50%' }} alt="product_img" /></td>
                                        <td>{order.name}</td>
                                        <td>{order.price}</td>
                                        <td>{order.rating}</td>
                                        <td>{order.country}</td>
                                        <td className='mx-auto'>
                                            <button className='btn btn-primary' onClick={() => handleOnClick(order._id)}>Delete</button>
                                        </td>
                                    </tr>
                                </>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MangeProducts;