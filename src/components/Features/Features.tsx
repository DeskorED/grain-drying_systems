import React from "react";

import {features} from "../../constants/features.ts";

import "./style.scss"

export const Features = () => {
    return (
        <div className="features-container">
            <div className="features">
                {
                    features.map(
                        feature => {
                            return (
                                <div className="features__item">
                                    <div className="features__item-logo"></div>
                                    <div className="features__item-text">
                                        <div className="features__item-text__header">
                                            {feature.name}
                                        </div>
                                        <div className="features__item-text__details">
                                            {feature.value}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}