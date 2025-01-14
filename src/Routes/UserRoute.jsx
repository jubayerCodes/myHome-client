import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from '../components/shared/Loader/Loader';

const UserRoute = ({ children }) => {

    const { role, status } = useSelector(state => state.auth)

    if ((role === null) && ((status === 'pending') || (status === 'idle') || (status === 'authenticated'))) {
        return <Loader />
    }

    if ((role === 'user')) {
        return <>
            {children}
        </>
    }

    return <Navigate to={'/login'} />
};

export default UserRoute;