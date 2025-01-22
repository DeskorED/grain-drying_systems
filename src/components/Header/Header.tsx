import React from "react";

import {Menu} from "./components/Menu";
import {Title} from "./components/Title";

import "./style.scss"

export const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <Title/>
                {/*<Menu/>*/}
                {/*<hr/>*/}
            </div>
        </div>
    )
}