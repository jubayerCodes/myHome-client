import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from '../components/shared/Loader/Loader';

const PrivateRoute = ({ children }) => {

    const { user, status } = useSelector(state => state.auth)

    if ((status === 'pending') || (status === 'idle')) {
        return <Loader />
    }

    if (user) {
        return children
    }

    return <Navigate to={'/'} />
};

export default PrivateRoute;