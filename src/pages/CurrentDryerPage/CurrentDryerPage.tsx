import React from "react";

import {dryers} from "../../constants/dryers-list.ts";

import {useParams} from "react-router-dom"

export const CurrentDryerPage = () => {

    let {id} = useParams();
    if (id === undefined) throw new Error("id is undefined");
    if (!(id in dryers)) throw new Error("id not in dryers-list");
    // @ts-ignore
    let currentDryer = dryers[id];

    return (
        <div className="current-dryer-page-container">
            <div className="current-dryer-page">

            </div>
        </div>
    )
}