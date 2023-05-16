import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Components/Block/Layout/UserLayout";
import HomeScreen from "../Pages/User/HomeScreen";
import AdminLayout from "../Components/Block/Layout/AdminLayout";
import DashBoard from "../Pages/Admin/DashBoard";
export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children:[{
        index: true,
        element: <HomeScreen/> 
    }]
  },
  {
    path: "dashboard",
    element: <AdminLayout />,
    children:[{
        index: true,
        element: <DashBoard/> 
    }]
  },
]);
