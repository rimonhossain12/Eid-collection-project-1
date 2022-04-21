import React, { useState } from 'react';
import Banner from '../Shared/Banner/Banner';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const [product, setProduct] = useState();
    // const [status,setStatus] = useState(true);/
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/Products', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log('successfully');
        })
    }
    return (
        <div>
            <Banner />
            <h2 className='mt-5'>Added your products</h2>
            <div className='form-div'>
                {/* <div>
                    <p>Please selected product Name</p>
                    <button className='btn'>man</button><button>woman</button><button>shoes</button><button>panjabi</button>
                </div> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='product name' className='form-control'{...register("name")} />
                    <input placeholder='product images' className='form-control'{...register("images")} />
                    <input placeholder='product price' className='form-control' {...register("price")} />
                    <input placeholder='product Rating' className='form-control' {...register("rating")} />
                    <input placeholder='product country' className='form-control' {...register("country")} />
                    <button type="submit" className="btn btn-secondary w-50 mt-3">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;