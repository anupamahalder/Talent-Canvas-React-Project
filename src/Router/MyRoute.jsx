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

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout><Outlet></Outlet></MainLayout>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'alljobs',
                element: <AllJobs/>,
                loader: ()=>fetch('http://localhost:5050/alljobs')
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
                element: <JobDetail/>,
                loader: ({params})=>fetch(`http://localhost:5050/jobs/${params.id1}/${params.id2}`)
            },
            {
                path: '/jobdetaildisplay/:id',
                element: <JobDetailDisplay/>,
                loader: ({params})=>fetch(`http://localhost:5050/job-detail/${params.id}`)
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