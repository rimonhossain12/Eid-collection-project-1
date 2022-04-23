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
       <Container className="mt-5">
            <Row xs={1} md={2}>
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
           </Row>
       </Container>
    );
};

export default Login;