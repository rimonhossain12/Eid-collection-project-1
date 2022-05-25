import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import './Login.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, googleLoginSystem, githubLoginSystem } = useAuth();
    const { reset } = useForm();
    const { isLoading, error } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();


    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnSubmit = (e) => {
        console.log('from login page', loginData.email, loginData.password);
        loginUser(loginData.email, loginData.password, location, navigate);
        console.log('location and navigate', location, navigate);
        reset()
        e.preventDefault();
    }

    // handle google login
    const handleGoogleLogin = (e) => {
        googleLoginSystem(location, navigate);
    }

    // handle github login
    const handleGithubButton = (e) => {
        githubLoginSystem(location, navigate);
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
                        <div className='pass' >
                            <img style={{ width: '10%' }} onClick={() => handleGoogleLogin()} className="img-fluid" src='https://i.ibb.co/8zHhKP2/download.jpg' alt="" />
                            <img style={{ width: '20%' }} onClick={() => handleGithubButton()} className="img-fluid" src='https://i.ibb.co/mSVN5Wk/download.png' alt="" />
                        </div>
                       <p>{error}</p>
                        <button type='submit' id='input-submit'>
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
                               ) : (
                                   "Login"
                               )
                           }
                        </button>
                        <div className='signup_link'>
                            <NavLink to="/register" id='nav-style' style={{ textDecoration: 'none' }}>New User? Please Register</NavLink>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Login;