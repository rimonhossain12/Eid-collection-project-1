import React from 'react';
import { useForm } from "react-hook-form";


const Admin = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 1){
                alert('Make admin successfully');
                reset()
            }
        })            
    }

    
    return (
        <div>
            <p className='fs-4 text-center'>Please Make an Admin</p>
            <div className='mt-3 form-div'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input className='form-control' {...register("email",  { required: true, maxLength: 20 })} /> */}
                    <div className='txt_field w-75 mx-auto'>
                        <input {...register("email", { required: true, maxLength: 20 })} type="email" required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className='text-center'>
                        <button className='w-50' type='submit' id='input-submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Admin;