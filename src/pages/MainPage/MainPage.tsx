import React from "react";

import {Catalogue} from "../../components/Catalogue"
import {Features} from "../../components/Features";
import {CompanyInfoBlock} from "../../components/CompanyInfoBlock";

import "./style.scss"

export const MainPage = () => {
    return (
        <div className="main-page">
            <CompanyInfoBlock/>
            <Features/>
            <Catalogue/>

        </div>
    )
}