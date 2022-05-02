import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const UserOrders = () => {
    const [myOrders,setMyOrders] = useState([]);
    const {user} = useAuth();
    
    const url = `http://localhost:5000/myOrders/${user.email}`;
    console.log(url);
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyOrders(data);
        })
    },[url])

    return (
        <div>
            <h2>This is Single Orders: {myOrders.length}</h2>
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
                            {/* <td>something</td> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, index) => <>
                                <tr>
                                    <td key={order._id}><img style={{ width: '100%', height: '50px' }} src={order.productImg} alt="" /></td>
                                    <td>{order.name}</td>
                                    <td>{order.price}</td>
                                    <td>{order.present_address}</td>
                                    
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

export default UserOrders;