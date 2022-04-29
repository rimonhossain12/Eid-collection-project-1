import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        <Spinner className='d-flex justify-content-center' animation="border" />
    }
    if (user.email) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRouter;