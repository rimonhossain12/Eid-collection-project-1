import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

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
        console.log(registerData.email, registerData.password, registerData.password2);
        if(registerData.password !== registerData.password2){
            alert('Please Type Correct Password');
            e.preventDefault();
            return;
        }
       registerUser(registerData.email,registerData.password);
    //    reset
        console.log(registerData.email, registerData.password, registerData.password2);
        e.preventDefault();
       
    }
    return (
        <div>
            <div className='login-body'>
                <Container className="">
                    <div className='center'>
                        <h1>Register</h1>
                        <Form onSubmit={handleOnSubmit}>
                            <div className='txt_field'>
                                <input type="email" name='email' onBlur={handleOnBlur} required />
                                <span></span>
                                <label>Your Email</label>
                            </div>
                            <div className='txt_field'>
                                <input type="password" name='password' onBlur={handleOnBlur} required />
                                <span></span>
                                <label>Your Password</label>
                            </div>
                            <div className='txt_field'>
                                <input type="password" name='password2' onBlur={handleOnBlur} required />
                                <span></span>
                                <label>ReType password</label>
                            </div>
                            {/* <div className='txt_field'>
                                <input type="password" name='password' onBlur={handleOnBlur} />
                                <span></span>
                                <label>password</label>
                            </div>
                            <div className='txt_field'>
                                <input type="password" name='password2' onBlur={handleOnBlur} />
                                <span></span>
                                <label>password</label>
                            </div> */}
                            <div className='pass'>
                                Forget Password
                            </div>
                            <button type='submit' id="input-submit">Register</button>
                            {/* <input id='input-submit' type="submit"  /> */}
                            <div className='signup_link'>
                                <NavLink to="/login" id='nav-style' style={{textDecoration:'none'}}>Already Register? Please Login</NavLink>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
        // <div className='container mt-5'>            
        //     <h4>Please Register</h4>
        //    <div className='mx-auto'>
        //         <Form onSubmit={handleOnSubmit}>
        //             <input type="email"
        //                 className="form-control mb-2"
        //                 placeholder="your email"
        //                 name='email'
        //                 style={{ width: '25%' }}
        //                 onBlur={handleOnBlur}
        //             />
        //             <input type="password"
        //                 className="form-control mb-2"
        //                 placeholder="your password"
        //                 name="password"
        //                 style={{ width: '25%' }}
        //                 onBlur={handleOnBlur}
        //             />
        //             <input type="password"
        //                 className="form-control mb-2"
        //                 placeholder="ReType your password"
        //                 name="password2"
        //                 style={{ width: '25%' }}
        //                 onBlur={handleOnBlur}
        //             />
        //             <button className='btn btn-primary'>Register</button>
        //         </Form>
        //    </div>
        //     <NavLink to="/login">Already Register? Please Login</NavLink>
        // </div>
    );
};

export default Register;