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
        </div>
    );
};

export default UserOrders;