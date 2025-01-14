import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from '../components/shared/Loader/Loader';

const PrivateRoute = ({ children }) => {

    const { user, status, role } = useSelector(state => state.auth)

    if ((role === null) && ((status === 'pending') || (status === 'idle') || (status === 'authenticated'))) {
        return <Loader />
    }

    if (user && role) {
        return children
    }

    return <Navigate to={'/login'} />
};

export default PrivateRoute;