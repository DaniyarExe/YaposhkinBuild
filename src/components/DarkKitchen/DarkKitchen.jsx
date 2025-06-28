import React, { useState } from 'react'
import style from './DarkKitchen.module.css'
import Modal from '../Modal/Modal';
import Symbols from '../../assets/img/Group 15.png'

const DarkKitchen = () => {

    return (
        <div className={style.Main}>
            <div className={style.FormatDK}>
                <div className={style.topImg}>
                    <img src={Symbols} alt="icon" />
                </div>
                <div className={style.DKtitle}>
                    <div className={style.DKmain}>
                        <h1>ФОРМАТ DARK KITCHEN</h1>
                    </div>
                    <div className={style.DKdescrip}>
                        <p>Dark Kitchen – это профессиональная кухня без зала для гостей,</p>
                        <p>работающая только на доставку. Площадь от 30 до 50 м².</p>
                    </div>
                    <div className={style.InvestDateInfo}>
                        <div className={style.OpeningDates}>
                            <p className={style.bold}>Сроки открытия</p>
                            <p>от 15–20 дней</p>
                        </div>
                        <div className={style.Invest}>
                            <p className={style.bold}>Инвестиции</p>
                            <p>от 1.4 млн. рублей</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DarkKitchen