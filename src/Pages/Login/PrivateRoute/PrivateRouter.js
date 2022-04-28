import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return <p>Loading..</p>
    }
    if (user.email) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRouter;