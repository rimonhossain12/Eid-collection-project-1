import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const UserOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [order,setOrder] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();

    let productList = myOrders.length;
    console.log(productList);

    const url = `http://localhost:5000/myOrders/${user.email}`;
    console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyOrders(data);
            })
    }, [user.email,url]);

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

    // load data form click any random edit button
    const LoadInfo = (id) => {
        try {
            fetch(`http://localhost:5000/orderUpdate/${id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setOrder(data);
                })
        }
        catch (error) { }
        handleShow();
        <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
        </Button>
    }

    const onSubmit = data => {
        console.log('user updated value',data);
        const newData =  {
            ...order,
            District: data.District,
            Present_Address: data.Present_Address,
            email: data.email,
            mobile: data.mobile,
            name: data.name,
            quantity:data.quantity,
        }
        console.log('after updating all the value', newData);
        fetch('http://localhost:5000/updatedUserInfo',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    };

    // const handleUserInformation = (id) => {
    //     // const url = `http://localhost:5000/orderUpdate/${id}`;
    //     console.log('update user id', id);
    // };

    return (
        <>
             {
                productList > 0 ? <div>
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
                                                <td><button className='btn btn-primary' onClick={() => LoadInfo(order._id)} >Edit</button></td>
                                            </tr>
                                        </>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> 
                : 
                <p className="fs-3 mt-2 fw-bold">You have no orders yet!</p>
             }
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
                                <input defaultValue={order.name} required className='form-control w-75'{...register("name")} />
                                <input defaultValue={order.mobile} required className='form-control w-75'{...register("mobile")} />
                                <input defaultValue={order.Present_Address} required className='form-control w-75' {...register("Present_Address")} />
                                <input defaultValue={order.District} required className='form-control w-75' {...register("District")} />
                                <input defaultValue={order.email} required className='form-control w-75' {...register("email")} />
                                <input defaultValue={order.quantity} required className='form-control w-75' {...register("quantity")} />
                                {/* <Button variant="primary" className='mx-auto'>Primary</Button>{' '} <br /> */}
                                <input type="submit"  style={{textAlign:'center',width:'18%'}} className="mx-auto btn btn-primary p-2 fw-bold" onClick={handleClose} value="submit" />
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button variant="primary" type='submit' className="mx-auto" onClick={handleClose}>
                            close
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </>
        </>
    );
};

export default UserOrders;