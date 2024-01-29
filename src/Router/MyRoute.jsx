import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../Pages/Login/Register";
import JobDetail from "../Components/JobDetail";
import ErrorPage from "../Components/ErrorPage";
import AllJobs from "../Pages/AllJobs/AllJobs";
import JobDetailDisplay from "../Components/JobDetailDisplay";
import MyJobs from "../Pages/MyJobs/MyJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import AddJobs from "../Pages/AddJobs/AddJobs";
import Blogs from "../Pages/Blogs/Blogs";
import MyJobUpdate from "../Pages/MyJobs/MyJobUpdate";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout><Outlet></Outlet></MainLayout>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'alljobs',
                element: <AllJobs/>,
            },
            {
                path: 'myjobs',
                element: <PrivateRoute><MyJobs/></PrivateRoute>,
            },
            {
                path: 'addjobs',
                element: <PrivateRoute><AddJobs/></PrivateRoute>
            },
            {
                path: 'appliedjobs',
                element: <PrivateRoute><AppliedJobs/></PrivateRoute>
            },
            {
                path: 'blogs',
                element: <Blogs/>
            },
            {
                path: '/myjobupdate/:id',
                element: <PrivateRoute><MyJobUpdate/></PrivateRoute>
            },
            {
                path: '/jobdetais/:id1/:id2',
                element: <PrivateRoute><JobDetail/></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5050/jobs/${params.id1}/${params.id2}`)
            },
            {
                path: '/jobdetaildisplay/:id',
                element: <PrivateRoute><JobDetailDisplay/></PrivateRoute>,
            }
        ]
    },
    {
        path: 'login',
        element: <Login/>
    },
    {
        path: 'register',
        element: <Register/>
    }
])

export default MyRoute;