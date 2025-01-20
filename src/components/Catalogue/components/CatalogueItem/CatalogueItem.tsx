import React from "react";

import "./style.scss";

interface CatalogueItemType {
    photo: string;
    name: string;
    price: string;
    size: string;
}

export const CatalogueItem = ({catalogueItem}: { catalogueItem: CatalogueItemType }) => {

    return (
        <div className="catalogue-item__container">
            <div className="catalogue-item">
                <div className="catalogue-item__photo">
                    <img src={`/assets/dryer-photos/${catalogueItem.photo}`} alt={catalogueItem.name}/>
                </div>
                <div className="catalogue-item__name"><b>Зерносушилка</b>: {catalogueItem?.name}</div>
                <div className="catalogue-item__price"><b>Цена</b> : {catalogueItem?.price}</div>
                <div className="catalogue-item__size"><b>Габариты</b> : {catalogueItem?.size}</div>
                <div className="catalogue-item__button">
                    <button className="description">
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    )
}