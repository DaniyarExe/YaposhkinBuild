import React, { useState } from 'react'
import style from "./Island.module.css"
import Modal from '../Modal/Modal';

const Island = () => {

    return (
        <div className={style.Main}>
            <div className={style.IslandMain}>
                <div className={style.islandTitle}>
                    <h1>ФОРМАТ ISLAND</h1>
                </div>
                <div className={style.IslandDescrip}>
                    <p>ISLAND – это профессиональная кухня с посадочными местами,</p>
                    <p>работающая в открытых пространствах ТРЦ и фудмоллов. Площадь от 50 до 100 м²</p>
                </div>
                <div className={style.InvestDateInfo}>
                    <div className={style.OpeningDates}>
                        <p className={style.bold}>Сроки открытия</p>
                        <p>от 45 дней</p>
                    </div>
                    <div className={style.Invest}>
                        <p className={style.bold}>Инвестиции</p>
                        <p>От 4.5 млн.рублей</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Island