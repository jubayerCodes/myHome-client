import { Link } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";


const ActiveLink = ({ to, children }) => {


    const pathname = useLocation()?.pathname

    return (

        <Link fontSize={'15px'} fontFamily={'Inter'} fontWeight={"medium"} color={"white"} underline="none" href={to} className={(pathname === to) ? "active-link header-li" : "header-li"}>{children}</Link>
    );
};

export default ActiveLink;