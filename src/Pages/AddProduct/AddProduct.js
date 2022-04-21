import React from 'react';
import Banner from '../Shared/Banner/Banner';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Banner/>
            <h2>Added your products</h2>
            <div className='form-div'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='product name' className='form-control'{...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder='product price' className='form-control' {...register("price")} />
                    <input placeholder='product Rating' className='form-control' {...register("rating", { required: true, maxLength: 20 })} />
                    <input placeholder='product country' className='form-control' {...register("country", { required: true, maxLength: 20 })} />
                    <button type="submit"  className="btn btn-secondary w-50 mt-3">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;