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
                    Object.entries(dryers).map(([id, dryer]) => <CatalogueItem key={id}
                                                                                    catalogueItem={dryer}/>)
                }
            </div>
        </div>
    )
}