import {menuTabs} from "../../../../constants/menuTabs.js";

import "./style.scss"

export const Menu = () => {
    return (
        <div className="menu-container">
            <div className="menu">
                {
                    menuTabs.map(
                        menuTab => {
                            return (
                                <div key={`${menuTab}`} className="menu-tab">
                                    {menuTab}
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}