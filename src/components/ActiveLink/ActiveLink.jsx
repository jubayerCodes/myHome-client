

import { NavLink } from "react-router-dom";


const ActiveLink = ({ to, children }) => {



    return (

        <NavLink to={to} className={({ isActive }) => isActive ? "active-link header-li" : "header-li"}>{children}</NavLink>
    );
};

export default ActiveLink;