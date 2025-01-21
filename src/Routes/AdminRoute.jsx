import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../components/shared/Loader/Loader';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { role, status } = useSelector(state => state.auth)

    if ((role === null) && ((status === 'pending') || (status === 'idle') || (status === 'authenticated'))) {
        return <Loader />
    }

    if ((role === 'admin')) {
        return <>
            {children}
        </>
    }

    return <Navigate to={'/login'} />
};

export default AdminRoute;