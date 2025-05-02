import React from 'react'
import style from './DarkKitchen.module.css'

const DarkKitchen = () => {
    return (
        <div className={style.Main}>
            <div className={style.FormatDK}>
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
                        <p>15-20 дней</p>
                    </div>
                    <div className={style.Invest}>
                        <p className={style.bold}>Инвестиции</p>
                        <p>От 1.4 млн.рублей</p>
                    </div>
                </div>
                <div className={style.Presentation}>
                    <button>Получить презентацию</button>
                </div>
            </div>
        </div>
    )
}

export default DarkKitchen