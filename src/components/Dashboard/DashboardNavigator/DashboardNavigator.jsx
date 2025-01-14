import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const DashboardNavigator = () => {

    const { role } = useSelector(state => state.auth)

    if (role === 'user') {

        return <Navigate to={'/dashboard/user-profile'} />

    } else if (role === 'agent') {

        return <Navigate to={'/dashboard/agent-profile'} />
    }
};

export default DashboardNavigator;