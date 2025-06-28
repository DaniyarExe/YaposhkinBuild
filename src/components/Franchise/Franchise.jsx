import React from 'react'
import style from './Franchise.module.css'

const Franchise = () => {
    return (
        <>
            <div className={style.Main}>
                <div className={style.gradientOverlayUp}></div>

                <div className={style.logo}>
                    <h1>ФРАНШИЗА</h1>
                </div>

                <div className={style.FranchiseDescrip}>
                    <p>Откройте прибыльный бизнес с франшизой доставки суши Yaposhkin Rolls.</p>
                    <p>Мы предлагаем готовую бизнес-модель с минимальными вложениями, быстрым</p>
                    <p>запуском и высокой рентабельностью. Франчайзи получают раскрученный бренд,</p>
                    <p>продуманное меню, автоматизированную IT-систему, маркетинговую поддержку</p>
                    <p>и полный набор инструментов для успешного старта.</p>
                </div>
                <div className={style.rectangle}></div>
                <div className={style.gradientOverlayDown}></div>
            </div >
        </>
    )
}

export default Franchise