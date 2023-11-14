import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

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
                element: <h1>myjobs</h1>
            },
            {
                path: 'addjobs',
                element: <h1>addjobs</h1>
            },
            {
                path: 'login',
                element: <h1>login</h1>
            },
            {
                path: 'appliedjobs',
                element: <h1>appliedjobs</h1>
            }
        ]
    }
])

export default MyRoute;