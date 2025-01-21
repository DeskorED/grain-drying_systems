import React from "react";

import { RouterProvider } from "react-router-dom";
import { DryerStoreRouter } from "../router/Router.tsx";

import {Header} from "../components/Header";

import './App.scss'

export const App = () => {

  return (
    <div className="app-container">
            <Header/>
          <RouterProvider router={DryerStoreRouter}/>
    </div>
  )
}
