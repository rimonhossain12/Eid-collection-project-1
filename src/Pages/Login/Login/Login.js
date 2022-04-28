import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser} = useAuth();
    const { reset } = useForm();

    const location = useLocation();
    const navigate = useNavigate();


    const handleOnChange = ( e ) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
   
    const handleOnSubmit = ( e ) => {
        console.log('from login page',loginData.email, loginData.password);
        loginUser(loginData.email,loginData.password,location,navigate);
        console.log('location and navigate',location,navigate);
        reset()
        e.preventDefault();
    }
    return (
      <div className='login-body'>
            <Container className="">
                <div className='center'>
                    <h1>Login</h1>
                    <form onSubmit={handleOnSubmit}>
                        <div className='txt_field'>
                            <input type="email" name="email" onChange={handleOnChange} required />
                            <span></span>
                            <label>Your Email</label>
                        </div>
                        <div className='txt_field'>
                            <input type="password" name="password" onChange={handleOnChange} required />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <div className='pass'>
                            Forget Password
                        </div>
                        <button type='submit' id='input-submit'>Login</button>
                        <div className='signup_link'>
                            <NavLink to="/register" id='nav-style' style={{textDecoration:'none'}}>New User? Please Register</NavLink>
                        </div>
                    </form>
                </div>
            </Container>            
      </div>
    );
};

export default Login;