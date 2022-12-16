import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';
import { Button, Modal } from 'react-bootstrap';

const AddProduct = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [status,setStatus] = useState(true);/
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://eid-collection-server1.onrender.com/addedProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    handleShow();
                    <Button variant="primary" onClick={handleShow}>
                        Launch static backdrop modal
                    </Button>
                    reset();
                }
            })
    }
    return (
        <div>
            {/* <Banner /> */}
            <h2 className='mt-5 text-center'>Please Add Products</h2>
            <div className='form-div'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='product name' required className='form-control'{...register("name")} />
                    <input placeholder='product images' required className='form-control'{...register("images")} />
                    <input placeholder='product price' required className='form-control' {...register("price")} />
                    <input placeholder='product Rating' required className='form-control' {...register("rating")} />
                    <input placeholder='product country' required className='form-control' {...register("country")} />
                    <div className='text-center'>
                        <button type="submit" required className="text-center btn btn-secondary w-50 mt-3">Submit</button>
                    </div>
                </form>
            </div>
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body>
                        Thank your for added new products.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" className="mx-auto" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default AddProduct;