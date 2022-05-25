import React, { useState } from 'react';
import { Container, Form, Spinner } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './Register.css';


const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { registerUser, error,isLoading } = useAuth();
    const { reset } = useForm();

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData);
    }

    const handleOnSubmit = (e) => {
        console.log(registerData.email, registerData.password, registerData.password2);
        if (registerData.password !== registerData.password2) {
            alert('Please Type Correct Password');
            e.preventDefault();
            return;
        }
        registerUser(registerData.userName,registerData.email, registerData.password,navigate);
        console.log(registerData.userName,registerData.email,registerData.password);
        reset();
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
                                <input type="text" name='userName' onChange={handleOnChange} required />
                                <span></span>
                                <label>Your Name</label>
                            </div>
                            <div className='txt_field'>
                                <input type="email" name='email' onChange={handleOnChange} required />
                                <span></span>
                                <label>Your Email</label>
                            </div>
                            <div className='txt_field'>
                                <input type="password" name='password' onChange={handleOnChange} required />
                                <span></span>
                                <label>Your Password</label>
                            </div>
                            <div className='txt_field'>
                                <input type="password" name='password2' onChange={handleOnChange} required />
                                <span></span>
                                <label>ReType password</label>
                            </div>
                            <div className='pass'>
                                {error}
                            </div>
                            <div className='pass'>
                                <Link to="/reset">
                                    Forget Password
                                </Link>
                            </div>
                            <button type='submit' id="input-submit">
                                {
                                    isLoading ? (
                                        <>
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Loading...</span>
                                        </>
                                    ) : ("Register")
                                }
                            </button>
                            {/* <input id='input-submit' type="submit"  /> */}
                            <div className='signup_link'>
                                <NavLink to="/login" id='nav-style' style={{ textDecoration: 'none' }}>Already Register? Please Login</NavLink>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Register;