import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnBlur = ( e ) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
   
    const handleOnSubmit = ( e ) => {
        console.log(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
      <div className='login-body'>
            <Container className="">
                <div className='center'>
                    <h1>Login</h1>
                    <form onSubmit={handleOnSubmit}>
                        <div className='txt_field'>
                            <input type="email" name="email" onBlur={handleOnBlur} required />
                            <span></span>
                            <label>Your Email</label>
                        </div>
                        <div className='txt_field'>
                            <input type="password" name="password" onBlur={handleOnBlur} required />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <div className='pass'>
                            Forget Password
                        </div>
                        <button type='submit' id='input-submit'>Login</button>
                        {/* <input id='input-submit' type="submit" value="login" /> */}
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