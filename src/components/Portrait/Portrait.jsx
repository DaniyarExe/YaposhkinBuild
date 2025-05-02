import React from 'react'
import style from './Portrait.module.css'
import PortraitCard from './PortraitCard/PortraitCard'

const Portrait = () => {

    const cardData = [
        {
            title: "ОПЫТНЫЙ И НАДЁЖНЫЙ",
            description: (
                <>
                    Опыт в сфере суши является <br />
                    существенным преимущестом
                </>
            )
        },
        {
            title: "ВОВЛЕЧЕННЫЙ В РАЗВИТИИ",
            description: (
                <>
                    Прохождениеобучения и погружение<br />
                    нашего бизнес - процесса
                </>
            )
        },
        {
            title: "ГОТОВЫЙ РАСШИРЯТЬСЯ",
            description: (
                <>
                    С желанием открыть несколько<br />
                    локаций за год соотрудничества
                </>
            )
        },
        {
            title: "ГОТОВ К САМОСТОЯТЕЛЬНОМУ",
            description: (
                <>
                    Поиску локации в своем городе
                </>
            )
        },
        {
            title: "ХОЧЕТ РАСТИ ВМЕСТЕ С НАМИ",
            description: (
                <>
                    Умеющий находить выход из ситуации
                </>
            )
        },
        {
            title: "ГОТОВЫЙ ПОМОГАТЬ",
            description: (
                <>
                    Партнёрам , которые рядом
                </>
            )
        },
    ]

    return (
        <div className={style.Main}>
            <div className={style.Partner}>
                <h1>ПОРТРЕТ ПАРТНЕРА</h1>
                <div className={style.PartnerDescrip}>
                    <p>Для нас партнёр - это единомышленник, который разделяет наши ценности</p>
                </div>
            </div>
            <div className={style.PortraitCard}>
                {cardData.map((card, index) => (
                    <PortraitCard
                        key={index}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portrait