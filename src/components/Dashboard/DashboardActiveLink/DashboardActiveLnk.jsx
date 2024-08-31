
import { Button } from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const DashboardActiveLnk = ({ children, href }) => {

    return (
        <NavLink to={href} className={({ isActive }) => isActive ? 'active w-full' : 'w-full'}>
            <Button className='menu-item'>
                {children}
            </Button>
        </NavLink>
    );
};

export default DashboardActiveLnk;