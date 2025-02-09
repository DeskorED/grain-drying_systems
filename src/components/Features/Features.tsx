import React from "react";

import "./style.scss"

export const Features = () => {
    return (
        <div className="features-container">
            <h2>Оборудование для сушки зерна от Agro Research</h2>
            <div className="features">
                <div className="features__item">
                    <div className="features__item-logo">
                        <img src="/assets/features-items-logo/multi.png" alt=""/>
                    </div>
                    <h3>Универсальность</h3>
                    ASM-AGRO бережно сушит любые культуры – зерновые, бобовые, мелкосемянные, масличные. При этом дополнительные агрегаты и переоборудование не требуется.

                    Зерносушилка может работать на газу, дизельном или твердом топливе.
                </div>
                <div className="features__item">
                    <div className="features__item-logo">
                        <img src="/assets/features-items-logo/safety.png" alt=""/>
                    </div>
                    <h3>Безопасность</h3>
                    Возгорания полностью исключены. Зерно сушится равномерно, точки перегрева отсутствуют, а заторы не
                    образуются благодаря постоянному движению жалюзийного ложа.
                </div>
                <div className="features__item">
                    <div className="features__item-logo">
                        <img src="/assets/features-items-logo/reliability.png" alt=""/>
                    </div>
                    <h3>Надежность</h3>
                    Конструкция зерносушилок ASM-AGRO проста и надежна. Гарантия на все модели – 5 лет, а капитальный ремонт не потребуется в течение 25 лет.
                </div>
                <div className="features__item">
                    <div className="features__item-logo">
                        <img src="/assets/features-items-logo/observe.png" alt=""/>
                    </div>
                    <h3>Открытость</h3>
                    Датчики температуры отслеживают нагрев зерна на каждом этапе. Благодаря «окнам доступа» можно непосредственно наблюдать за сушкой и брать пробы зерна в любой момент. Тонкая настройка параметров сушки позволяет настраивать режим сушки для любого зерна.                </div>
                <div className="features__item">
                    <div className="features__item-logo">
                        <img src="/assets/features-items-logo/efficiency.png" alt=""/>
                    </div>
                    <h3>Оперативность</h3>
                    Конвейерные зерносушилки не требуют предварительной подготовки зерна. Можно оперативно сушить продукцию сразу после уборки, с любой степенью засоренности и исходной влажностью.
                </div>
                <div className="features__item">
                    <div className="features__item-logo">
                        <img src="/assets/features-items-logo/easy.png" alt=""/>
                    </div>
                    <h3>Простота</h3>
                    Обучение работе на зерносушилке занимает всего несколько часов. Управление зерносушилкой интуитивно понятно. Контролировать работу сушилки может один оператор.
                </div>
            </div>
        </div>
    )
}