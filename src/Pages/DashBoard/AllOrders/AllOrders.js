import React, { useEffect, useState } from 'react';
import './AllOrders.css';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
                // console.log(data);
            })
    }, [])

    return (
        <div>
            <h2>This is All Users Collections: {allOrders.length}</h2>
            <div className="table-responsive">
                <table className="table" id="customer">
                    <thead>
                        <tr>
                            <th>IMG</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                            <th>status</th>
                            <th>Decision</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                         allOrders.map((order,index) => <>
                            <tr>
                                 <td key={order._id}><img style={{width:'100%', height:'50px'}} src={order.productImg} alt="" /></td>
                                 <td>{order.name}</td>
                                 <td>{order.email}</td>
                                 <td>{order.price}</td>
                                 <td>{order.Present_Address}</td>
                                 <td>{order.mobile}</td>
                                 <td>{order.quantity}</td>
                                 <td>Pending</td>
                                  {/* <button onClick={() => handleCancelButton(order._id)} className='btn btn-danger my-2 fw-bold ms-3'><MdDelete size={25} />Cancel</button> */}
                                 <button type="button" className="btn btn-primary">Deletion</button>

                            </tr>
                         </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;