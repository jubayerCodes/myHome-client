import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../components/shared/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { role, status } = useSelector(state => state.auth)
    const location = useLocation()

    if ((role === null) && ((status === 'pending') || (status === 'idle') || (status === 'authenticated'))) {
        return <Loader />
    }

    if ((role === 'admin')) {
        return <>
            {children}
        </>
    }

    return <Navigate to={'/login'} state={{ from: location }} replace={true} />
};

export default AdminRoute;