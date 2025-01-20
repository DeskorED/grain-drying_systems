import React from "react";

import {Header} from "../../components/Header"
import {Catalogue} from "../../components/Catalogue"

import "./style.scss"

export const MainPage = () => {
    return (
        <div className="main-page">
            <Header/>
            <Catalogue/>
        </div>
    )
}