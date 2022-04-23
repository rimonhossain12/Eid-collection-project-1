import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registerData,setRegisterData] = useState({});
    const {registerUser} = useAuth();

    const handleOnBlur = ( e ) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleOnSubmit = ( e ) => {
        if(registerData.password !== registerData.password2){
            alert('Please Type Correct Password');
            e.preventDefault();
            return;
        }
       registerUser(registerData.email,registerData.password);
        console.log(registerData.email, registerData.password, registerData.password2);
        e.preventDefault();
       
    }
    return (
        <div className='container mt-5'>            
            <h4>Please Register</h4>
           <div className='mx-auto'>
                <Form onSubmit={handleOnSubmit}>
                    <input type="email"
                        className="form-control mb-2"
                        placeholder="your email"
                        name='email'
                        style={{ width: '25%' }}
                        onBlur={handleOnBlur}
                    />
                    <input type="password"
                        className="form-control mb-2"
                        placeholder="your password"
                        name="password"
                        style={{ width: '25%' }}
                        onBlur={handleOnBlur}
                    />
                    <input type="password"
                        className="form-control mb-2"
                        placeholder="ReType your password"
                        name="password2"
                        style={{ width: '25%' }}
                        onBlur={handleOnBlur}
                    />
                    <button className='btn btn-primary'>Register</button>
                </Form>
           </div>
            <NavLink to="/login">Already Register? Please Login</NavLink>
        </div>
    );
};

export default Register;