import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/shared/Loader/Loader';

const UserRoute = ({ children }) => {

    const { role, status } = useSelector(state => state.auth)
    const location = useLocation()

    if ((role === null) && ((status === 'pending') || (status === 'idle') || (status === 'authenticated'))) {
        return <Loader />
    }

    if ((role === 'user')) {
        return <>
            {children}
        </>
    }

    return <Navigate to={'/login'} state={{ from: location }} replace={true} />
};

export default UserRoute;