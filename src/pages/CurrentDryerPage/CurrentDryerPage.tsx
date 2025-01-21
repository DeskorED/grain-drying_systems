import React from "react";

import {dryers} from "../../constants/dryers-list.ts";

import {useParams,useNavigate} from "react-router-dom"


import "./style.scss"
import {routes} from "../../router/routes.ts";

export const CurrentDryerPage = () => {

    let navigate = useNavigate();

    let {id} = useParams();
    if (id === undefined) throw new Error("id is undefined");
    if (!(id in dryers)) throw new Error("id not in dryers-list");
    // @ts-ignore
    let currentDryer = dryers[id];

    return (
        <div className="current-dryer-page-container">
            <div className="main-button">
                <button onClick={
                    () => navigate(routes.Main)
                }>
                    На главную
                </button>
            </div>
            <div className="current-dryer-page">
                <div className="dryer-image">
                    <img src={`/assets/dryer-photos/${currentDryer?.photo}`} alt=""/>
                </div>
                <div className="dryer-specs">
                    <h1 className="dryer-specs__header ">
                        {currentDryer.name}
                    </h1>
                    <hr/>
                    <div className="dryer-specs__description ">
                        {currentDryer.description}
                    </div>
                    <div className="dryer-spec">
                        <b>Производительность</b>: {currentDryer.productivity}
                    </div>
                    <div className="dryer-spec">
                        <b>Вид топлива</b>: {currentDryer.fuelType}
                    </div>
                    <div className="dryer-spec">
                        <b>Цена</b>: {currentDryer.price}
                    </div>
                    <div className="dryer-spec">
                        <b>Габариты</b>: {currentDryer.size}
                    </div>
                    <div className="dryer-spec">
                        <b>Срок изготовления</b>: {currentDryer.creatingTime}
                    </div>
                </div>
            </div>
        </div>
    )
}