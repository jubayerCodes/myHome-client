import { createBrowserRouter, Navigate } from "react-router-dom";
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
import DashboardFavorites from "../components/Dashboard/shared/DashboardFavorites/DashboardFavorites";
import UserRoute from "./UserRoute";
import PrivateRoute from "./PrivateRoute";
import AgentRoute from "./AgentRoute";
import AgentProfile from "../components/Dashboard/Agent/AgentProfile/AgentProfile";
import MyProperties from "../components/Dashboard/Agent/MyProperties/MyProperties";
import AddProperty from "../components/Dashboard/Agent/AddProperty/AddProperty";
import AgentInvoices from "../components/Dashboard/Agent/AgentInvoices/AgentInvoices";
import DashboardNavigator from "../components/Dashboard/DashboardNavigator/DashboardNavigator";
import Login from "../pages/Login/Login";
import AdminRoute from "./AdminRoute";
import ManageProperties from "../components/Dashboard/Admin/ManageProperties/ManageProperties";
import AdminProfile from "../components/Dashboard/Admin/AdminProfile/AdminProfile";
import ManageUsers from "../components/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageReviews from "../components/Dashboard/Admin/ManageReviews/ManageReviews";
import Contact from "../pages/Contact/Contact";

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
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/properties/:id',
        element: <PrivateRoute><SingleProperty /></PrivateRoute>,
        loader: ({ params }) => store.dispatch(propertiesApi.endpoints.getProperty.initiate(params.id))
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <PrivateRoute><DashboardNavigator /></PrivateRoute>
      },
      {
        path: 'user-profile',
        element: <UserRoute><UserProfile /></UserRoute>
      },
      {
        path: 'user-invoices',
        element: <UserRoute><UserInvoices /></UserRoute>
      },
      {
        path: 'favorites',
        element: <UserRoute><DashboardFavorites /></UserRoute>
      },
      {
        path: 'overview',
        element: <AgentRoute><Overview /></AgentRoute>
      },
      {
        path: 'agent-profile',
        element: <AgentRoute><AgentProfile /></AgentRoute>
      },
      {
        path: 'my-properties',
        element: <AgentRoute><MyProperties /></AgentRoute>
      },
      {
        path: 'add-property',
        element: <AgentRoute><AddProperty /></AgentRoute>
      },
      {
        path: 'agent-invoices',
        element: <AgentRoute><AgentInvoices /></AgentRoute>
      },
      {
        path: 'admin-profile',
        element: <AdminRoute><AdminProfile /></AdminRoute>
      },
      {
        path: 'manage-properties',
        element: <AdminRoute><ManageProperties /></AdminRoute>
      },
      {
        path: 'manage-users',
        element: <AdminRoute><ManageUsers /></AdminRoute>
      },
      {
        path: 'manage-reviews',
        element: <AdminRoute><ManageReviews /></AdminRoute>
      }
    ]
  }
]);

export default Router;
