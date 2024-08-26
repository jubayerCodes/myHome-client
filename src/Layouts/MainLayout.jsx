import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Login from '../components/shared/Login/Login';

const MainLayout = () => {
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