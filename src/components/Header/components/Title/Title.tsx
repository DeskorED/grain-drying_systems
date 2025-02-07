import React from "react";

import "./style.scss"

export const Title = () => {
    return (
        <div className="title">
            <div className="title-logo">
                <img src="/assets/logo/logoAgroResearch.jpg" alt=""/>
            </div>
            {/*<div className="title-text">Research & Development Agro <br/>*/}
            {/*    <div className="title-text-description">– продукти, створені інженерами.</div>*/}
            {/*</div>*/}
            <div className="title-text">
                ЗКМ-1
            </div>
        </div>
    )
}