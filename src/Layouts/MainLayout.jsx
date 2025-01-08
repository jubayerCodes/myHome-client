import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Login from '../components/shared/Login/Login';
import { useEffect } from "react";

const MainLayout = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <>
            <Header></Header>
            <Outlet />
            <Login />
            <Footer></Footer>
        </>
    );
};

export default MainLayout;