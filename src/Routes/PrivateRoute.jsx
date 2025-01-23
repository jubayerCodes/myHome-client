import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/shared/Loader/Loader';

const PrivateRoute = ({ children }) => {

    const { user, status, role } = useSelector(state => state.auth)
    const location = useLocation()

    if ((role === null) && ((status === 'pending') || (status === 'idle') || (status === 'authenticated'))) {
        return <Loader />
    }

    if (user && role) {
        return children
    }

    return <Navigate to={'/login'} state={{ from: location }} replace={true} />
};

export default PrivateRoute;