import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../Pages/Login/Register";
import JobDetail from "../Components/JobDetail";

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
            },
            {
                path: '/jobdetais/:id1/:id2',
                element: <JobDetail></JobDetail>,
                loader: ({params})=>fetch(`http://localhost:5050/jobs/${params.id1}/${params.id2}`)
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    }
])

export default MyRoute;