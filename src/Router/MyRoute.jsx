import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const MyRoute = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: 'about',
                    element: <h1>About</h1>
                }
            ]
        }
    ]
)

export default MyRoute;