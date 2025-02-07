import React from "react";

import "./style.scss"

export const CompanyInfoBlock = () => {
    return (
        <div className="company-info-block__container">
            <div className="company-info-block">
                <div className="company-info-block__header">
                    Зерносушарки конвеєрні
                </div>
                <div className="company-info-block__text">
                    МОДУЛЬНОГО ТИПУ
                </div>
            </div>
            <div className="company-main-info">
                Що таке Конвеєрна Модульна <br/> Зерносушарка
            </div>
        </div>
    )
}