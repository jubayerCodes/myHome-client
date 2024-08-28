import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Properties from "../pages/Properties/Properties";
import SingleProperty from "../pages/SingleProperty/SingleProperty";
import propertiesApi from "../Utilities/Redux/features/api/propertiesApi";
import { store } from "../Utilities/Redux/store";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import UserProfile from "../components/Dashboard/User/UserProfile/UserProfile";
import Overview from "../components/Dashboard/shared/Overview/Overview";
import UserInvoices from "../components/Dashboard/User/UserInvoices/UserInvoices";
import Inbox from "../components/Dashboard/shared/Inbox/Inbox";
import DashboardFavorites from "../components/Dashboard/shared/DashboardFavorites/DashboardFavorites";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/properties',
        element: <Properties />
      },
      {
        path: '/properties/:id',
        element: <SingleProperty />,
        loader: ({ params }) => store.dispatch(propertiesApi.endpoints.getProperty.initiate(params.id))
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'overview',
        element: <Overview />
      },
      {
        path: 'user-profile',
        element: <UserProfile />
      },
      {
        path: 'user-invoices',
        element: <UserInvoices />
      },
      {
        path: 'inbox',
        element: <Inbox />
      },
      {
        path: 'favorites',
        element: <DashboardFavorites />
      }
    ]
  }
]);

export default Router;
