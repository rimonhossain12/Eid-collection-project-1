import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateInfo = () => {
    const { register, handleSubmit } = useForm();
     const HandleUserInformation = (id) => {
        const url = `http://localhost:5000/orderUpdate/${id}`;
        console.log(url);
        useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        },[url]);

         // edit user information
         const onSubmit = data => {
             console.log(data);
         };

    return (
        <div>
            <div className='form-div'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='user name' defaultValue={user.displayName} required className='form-control w-75'{...register("name")} />
                    <input placeholder='user email' required defaultValue={user.email} className='form-control w-75'{...register("email")} />
                    {/* <input placeholder='product price' defaultValue={product.price} className='form-control w-75'{...register("price")} /> */}
                    <input placeholder='product quantity' type="number" required className='form-control w-75' {...register("quantity")} />
                    <input placeholder='Your phone number' required className='form-control w-75' {...register("mobile")} />
                    <input placeholder='Your district' required className='form-control w-75' {...register("District")} />
                    <textarea placeholder='Your full address' required className='form-control w-75' {...register("Present_Address")} />
                    <button type="submit" required className="btn btn-secondary w-75 mt-3">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateInfo;