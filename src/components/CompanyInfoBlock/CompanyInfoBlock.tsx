import React, {useEffect, useState} from "react";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./style.scss"

export const CompanyInfoBlock = () => {
    const [infoDetailsWrapped, setInfoDetailsWrapped] = useState(true);

    const infoDetailsObject = document.querySelector(".company-main-info_details");
    const infoDetailsTextObject = document.querySelector(".company-main-info_details__text");

    if (infoDetailsObject) {
        if (infoDetailsTextObject) {
            if (!infoDetailsWrapped) {
                infoDetailsObject.style.height = "fit-content";
                infoDetailsTextObject.style.fontSize = "60%";
            }
            if (infoDetailsWrapped) {
                infoDetailsObject.style.height = "0";
                infoDetailsTextObject.style.fontSize = "0";
            }
        }
    }

    return (
        <div className="company-info-block__container">
            <div className="company-info-block">
                <div className="company-info-block__filter">
                    <div className="company-info-block__header">
                        Зерносушарки конвеєрні
                    </div>
                    <div className="company-info-block__text">
                        МОДУЛЬНОГО ТИПУ
                    </div>
                </div>
            </div>
            <div className="company-main-info-container">
                <div className="company-main-info">
                    <div className="company-main-info_header"
                         onClick={
                             () => setInfoDetailsWrapped(!infoDetailsWrapped)
                         }
                    >
                        <div className="company-main-info_header-title">
                            Що таке Конвеєрна Модульна <br/> Зерносушарка
                        </div>
                        <div className="company-main-info_header-button">
                            <div className="arrow">
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="company-main-info_details">
                        <ul className="company-main-info_details__text">
                            <li>
                                В залежності від модифікації продуктивність сушарок складає від 6 до 44 м. куб.
                                продукту (від 5 до 35 т/год).
                            </li>
                            <li>
                                Можливо використовувати <b>будь-яке джерело тепла</b>: газ, дизель, тверде паливо.
                            </li>
                            <li>
                                Зерносушарка при повному завантаженні <b>здатна повністю окупити свою вартість за один
                                сезон</b>.
                            </li>
                            <li>
                                Можливість <b>зняття будь-якого відсотку вологості за один прохід</b> завдяки
                                регулюванню швидкості
                                транспортеру та можливості регулювати товщину шару продукту. Контроль вологості та
                                температури
                                відбувається в реальному часі завдяки датчикам на всіх етапах сушіння.
                            </li>
                            <li>
                                Конструкція сушарки дозволяє працювати з <b>неочищеним</b> зерном (з поля).
                            </li>
                            <li>
                                <b>Бережне ставлення до зерна</b> дозволяє мінімізувати його травмування.
                            </li>
                            <li>
                                Вбудована <b>система рекуперації</b> дає змогу використовувати підігріте повітря при
                                охолодженні зерна і економити до 25% палива.
                                Гарячі зони зерносушарки мають <i>утеплення з мінеральної вати</i>, що знижуе
                                тепловитрати при роботі в холодну пору року.
                            </li>
                            <li>
                                Завдяки конструктивній особливості конвеєрна <b>зерносушарка є найбільш захищеною від
                                загорянь</b>, адже місця накопичення зернового пилу просто відсутні. Саме зерно
                                переміщується
                                транспортером по похилому ложі, що в свою чергу перешкоджає утворенню заторів, заляганню
                                зерна. Весь потік зерна рухається рівномірно.
                            </li>
                            <li>
                                Конструкція зерносушарки дозволяє працювати в <b>безперервному потоковому режимі</b> з
                                зерном різних
                                партій та вологи і навіть з зерном різних культур.
                            </li>
                            <li>
                                <b>В автоматичному режимі</b> зерносушарка самма регулює всі необхідні параметри для
                                отримання необхідної вологості продукту.
                            </li>
                            <li>
                                В конструкції зерносушарки використовуються надійні загальнопромислові комплектуючі.
                            </li>
                            <li>
                                Легка конструкція дозволяє <b>мінімізувати витрати на фундамент</b>.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}