import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Profile.css';

const Profile = () => {
    const { user, logOut} = useAuth();
    return (
       <div className="container">
           <div className="profile-main">
               <div className="profile-div">
                   <h4 className='fw-lighter pt-3'>My Profile</h4>
                    <img src="https://i.ibb.co/58mw0Qs/219986.png" className='img-fluid mx-auto mt-2' alt="219986" border="0" />
                    <p className='fw-lighter fs-5 mt-3'>{user.displayName}</p>
                    <p className='fw-lighter fs-5 mt-3'>{user.email}</p>
                    <button className='btn btn-primary' onClick={logOut}>LogOut</button>
               </div>
           </div>
       </div>
    );
};

export default Profile;
