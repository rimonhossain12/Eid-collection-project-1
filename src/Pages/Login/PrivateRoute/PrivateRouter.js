import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return <div class="text-center">
            {/* <div class="spinner-border" role="status"> */}
                <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            {/* </div> */}
        </div>
    }
    if (user.email) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRouter;