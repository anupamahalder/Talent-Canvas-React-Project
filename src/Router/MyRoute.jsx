import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout><Outlet></Outlet></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <h1>About</h1>
            }
        ]
    }
])

export default MyRoute;