import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [allOrders,setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
        .then(res => res.json())
        .then(data => {
            setAllOrders(data);
            console.log(data);
        })
    },[])

    return (
        <div>
            <h2>This is All Users Collections: {allOrders.length}</h2>
        </div>
    );
};

export default AllOrders;