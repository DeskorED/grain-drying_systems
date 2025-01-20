import React from "react";

import {dryers} from "../../constants/dryers-list";

import {CatalogueItem} from "./components/CatalogueItem";

import "./style.scss"


export const Catalogue = () => {
    return (
        <div className="catalogue-container">
            <h1>Каталог продукции</h1>
            <div className="catalogue">
                {
                    dryers.map(dryer => <CatalogueItem key={dryer.name} catalogueItem={dryer} />)
                }
            </div>
        </div>
    )
}