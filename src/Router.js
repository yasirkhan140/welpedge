import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";


import React from 'react'
import App from "./App";
import Layout from "./Layout/Layout";
import About from "./component/About/About";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,

        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },

]);


const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router