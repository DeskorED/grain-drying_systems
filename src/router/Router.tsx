import React from "react";
import {createBrowserRouter} from "react-router-dom";

import {MainPage} from "../pages/MainPage";
import {CurrentDryerPage} from "../pages/CurrentDryerPage";

export const DryerStoreRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: ":id",
        element: <CurrentDryerPage/>
    }
])