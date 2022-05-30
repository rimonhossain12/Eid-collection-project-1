import React,{useState,useEffect} from 'react';

const Subscribers = () => {
    const [subscribers,setSubscribers] = useState([]);
    useEffect(() =>{
        fetch('https://desolate-sierra-72252.herokuapp.com/subscribers')
        .then(res => res.json())
        .then(data => {
            setSubscribers(data);
            console.log(data);
        })
    },[])
    return (
        <div>
            <div>
                <h2 className='text-primary fs-5 text-center my-3'>All Subscribers</h2>
                <div style={{ marginLeft: '50px' }}>
                    <div className='table-responsive'>
                        <table id='customer'>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Reach Us</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    subscribers.map((order, index) => <>
                                        <tr key={order._id}>
                                            <td>{order.email}</td>
                                            <td><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target={`_blank`}>Find Me</a></td>
                                        </tr>
                                    </>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribers;