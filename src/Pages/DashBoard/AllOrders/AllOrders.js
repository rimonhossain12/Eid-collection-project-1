import React, { useEffect, useState } from 'react';
import './AllOrders.css';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    // const [active,setActive] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
                console.log(data);
            });
    }, [])

    const handleDeleteButton = (id) => {
        console.log('id',id);
       const processed = window.confirm('Do you want to deleted Orders? Please Think again about it. Thank you');
       if(processed){
           const url = `http://localhost:5000/remove/${id}`;
           fetch(url, {
               method: 'DELETE',
               headers: {
                   'content-type': 'application/json'
               },
               body: JSON.stringify(allOrders)
           })
               .then(res => res.json())
               .then(data => {
                    const filterProducts = allOrders.filter( product => product._id !== id);
                    setAllOrders(filterProducts);
               })
       }
    }

    return (
        <div>
            <h2>This is All Users Collections: {allOrders.length}</h2>
            <div style={{ marginLeft: '50px' }} className="mt-3">
                <div className='table-responsive'>
                    <table id='customer'>
                        <thead>
                            <tr>
                                <th>IMG</th>
                                <th>ProductName</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>userName</th>
                                <th>Email</th>
                                <th>Location </th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Decision</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrders.map((order, index) => <>
                                    <tr>
                                        <td><img src={order.productImg} style={{ height: '50px', width: '100%' }} alt="product_img" /></td>
                                        <td>{order.productName}</td>
                                        <td>{order.price}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.Present_Address}</td>
                                        <td>{order.mobile}</td>
                                        <td className='text-center text-danger'>pending</td>
                                        <button className='btn btn-danger' onClick={ () => handleDeleteButton(order._id)}>cancel</button>
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

export default AllOrders;