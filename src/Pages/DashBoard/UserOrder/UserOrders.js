import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const UserOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);
    const { register, handleSubmit } = useForm();
    

    const url = `http://localhost:5000/myOrders/${user.email}`;
    console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyOrders(data);
            })
    }, [url]);

    const handleDeleteButton = (id) => {
        const processed = window.confirm('Do you want to Cancel your products?');
        const url = `http://localhost:5000/remove/${id}`;
        if (processed) {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(myOrders)
            })
                .then(res => res.json())
                .then(data => {
                    // alert('Delete Products successfully!');
                    const filterItem = myOrders.filter(product => product._id !== id);
                    setMyOrders(filterItem);
                    console.log(data);
                })
        }

    }

    // edit user information
    const onSubmit = data => {
            console.log(data);  
    };

    const handleUserInformation = (id) => {
        handleShow();
        <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
        </Button>
    }
   

    return (
        <>
            <div>
                <h2>This is Single Orders: {myOrders.length}</h2>
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
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders.map((order, index) => <>
                                        <tr key={order._id}>
                                            <td><img src={order.productImg} style={{ height: '50px', width: '100%' }} alt="product_img" /></td>
                                            <td>{order.productName}</td>
                                            <td>{order.price}</td>
                                            <td>{order.quantity}</td>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.Present_Address}</td>
                                            <td>{order.mobile}</td>
                                            <td className='text-center text-danger'>pending</td>
                                            <td> <button className='btn btn-danger' onClick={() => handleDeleteButton(order._id)}>cancel</button></td>
                                            <td><button className='btn btn-primary' onClick={() => handleUserInformation(order._id)}>Edit</button></td>
                                        </tr>
                                    </>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body>
                        <div className='form-div'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder='user name' defaultValue={user.displayName} required className='form-control w-75'{...register("name")} />
                                <input placeholder='user email' required defaultValue={user.email} className='form-control w-75'{...register("email")} />
                                <input placeholder='product price' defaultValue={product.price} className='form-control w-75'{...register("price")} />
                                <input placeholder='product quantity' type="number" required className='form-control w-75' {...register("quantity")} />
                                <input placeholder='Your phone number' required className='form-control w-75' {...register("mobile")} />
                                <input placeholder='Your district' required className='form-control w-75' {...register("District")} />
                                <textarea placeholder='Your full address' required className='form-control w-75' {...register("Present_Address")} />
                                <button type="submit" required className="btn btn-secondary w-75 mt-3">Submit</button>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type='submit' className="mx-auto" onClick={handleClose}>
                            close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    );
};

export default UserOrders;