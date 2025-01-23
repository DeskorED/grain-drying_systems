import React from "react";
import {Navigate} from 'react-router-dom'
import {createBrowserRouter} from "react-router-dom";

import {MainPage} from "../pages/MainPage";
import {CurrentDryerPage} from "../pages/CurrentDryerPage";


export const DryerStoreRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/grain-drying_systems"/>
    },
    {
        path: "/grain-drying_systems/",
        element: <MainPage/>,
        children: [
            {
                path: ":id",
                element: <CurrentDryerPage/>
            }
        ]
    },
])