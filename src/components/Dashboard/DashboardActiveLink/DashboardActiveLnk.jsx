
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const DashboardActiveLnk = ({ children, href }) => {

    return (
        <NavLink to={href} className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
            {children}
        </NavLink>
    );
};

export default DashboardActiveLnk;