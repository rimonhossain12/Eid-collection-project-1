import React, { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import './Login.css';
import login from '../../../images/Register/login.jpg';
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
                {/* <Row xs={1} md={2}>
                <div>      
                    <p>Please Login</p>
                    <Form onSubmit={handleOnSubmit}>
                            <input type="email" 
                            className="form-control mb-2"
                             placeholder="your email" 
                             name='email'
                             style={{width:'75%'}}
                             onBlur={handleOnBlur}
                             />
                            <input type="password" 
                            className="form-control mb-2" 
                            placeholder="your password"  
                            name="password"
                            style={{ width: '75%' }}
                            onBlur={handleOnBlur}
                            />   
                            <button className='btn btn-primary'>Login</button>
                    </Form>    
                    <NavLink to="/register">New User? Please Register</NavLink>              
                </div>
               
                <div className='mt-3'>
                    <img src={login} className="img-fluid" alt="" />
                </div>
           </Row> */}
                <div className='center'>
                    <h1>Login</h1>
                    <form method='post'>
                        <div className='txt_field'>
                            <input type="text" required />
                            <span></span>
                            <label>Username</label>
                        </div>
                        <div className='txt_field'>
                            <input type="password" required />
                            <span></span>
                            <label>password</label>
                        </div>
                        <div className='pass'>
                            Forget Password
                        </div>
                        <input id='input-submit' type="submit" value="login" />
                        <div className='signup_link'>
                            Not a memeber <a href="#www"> singUp</a>
                        </div>
                    </form>
                </div>
            </Container>            
      </div>
    );
};

export default Login;