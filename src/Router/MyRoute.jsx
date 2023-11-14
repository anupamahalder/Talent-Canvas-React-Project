import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout><Outlet></Outlet></MainLayout>,
        errorElement: <h1>404 Error</h1>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'alljobs',
                element: <h1>alljobs</h1>
            },
            {
                path: 'myjobs',
                element: <PrivateRoute><h1>myjobs</h1></PrivateRoute>
            },
            {
                path: 'addjobs',
                element: <PrivateRoute><h1>addjobs</h1></PrivateRoute>
            },
            {
                path: 'appliedjobs',
                element: <PrivateRoute><h1>appliedjobs</h1></PrivateRoute>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    }
])

export default MyRoute;