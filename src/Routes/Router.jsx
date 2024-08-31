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
import Inbox from "../components/Dashboard/shared/Inbox/Inbox";
import DashboardFavorites from "../components/Dashboard/shared/DashboardFavorites/DashboardFavorites";
import UserRoute from "./UserRoute";
import PrivateRoute from "./PrivateRoute";
import AgentRoute from "./AgentRoute";
import AgentProfile from "../components/Dashboard/Agent/AgentProfile/AgentProfile";
import MyProperties from "../components/Dashboard/Agent/MyProperties/MyProperties";
import AddProperty from "../components/Dashboard/Agent/AddProperty/AddProperty";
import AgentInvoices from "../components/Dashboard/Agent/AgentInvoices/AgentInvoices";
import DashboardNavigator from "../components/Dashboard/DashboardNavigator/DashboardNavigator";

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
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <PrivateRoute><DashboardNavigator /></PrivateRoute>
      },
      {
        path: 'overview',
        element: <AgentRoute><Overview /></AgentRoute>
      },
      {
        path: 'user-profile',
        element: <UserRoute><UserProfile /></UserRoute>
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
        path: 'user-invoices',
        element: <UserRoute><UserInvoices /></UserRoute>
      },
      {
        path: 'inbox',
        element: <PrivateRoute><Inbox /></PrivateRoute>
      },
      {
        path: 'favorites',
        element: <PrivateRoute><DashboardFavorites /></PrivateRoute>
      }
    ]
  }
]);

export default Router;
