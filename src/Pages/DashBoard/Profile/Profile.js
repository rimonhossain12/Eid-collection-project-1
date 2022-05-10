import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Profile.css';

const Profile = () => {
    const { user, logOut
} = useAuth();
    return (
        <div className='container'>
            <div className='card'>
                <div>
                    <img src="https://i.ibb.co/58mw0Qs/219986.png" className='img-fluid mx-auto mt-2' alt="219986" border="0" />
                </div>
                <div className='mt-3'>
                    <p className='fw-lighter fs-5 mt-3'>{user.displayName}</p>
                    <p className='fw-lighter fs-5 mt-3'>{user.email}</p>
                    <Button onClick={logOut} variant="primary">LogOUt</Button>{' '}
                </div>               
            </div>           
        </div>
    );
};

export default Profile;