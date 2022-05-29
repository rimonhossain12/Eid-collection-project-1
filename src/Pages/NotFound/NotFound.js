import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../../images/notfound/404.jpg';

const NotFound = () => {
    return (
       <div>
            <div className='container'>
                <img src={Error} alt="" />
            </div>
            <div className='mt-5'>
                <Link to="/"><button className='btn btn-danger' >Dont' worry ! Back to safety!</button></Link>
            </div>
       </div>
    );
};

export default NotFound;