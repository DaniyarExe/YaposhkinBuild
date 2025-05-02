import React from 'react'
import style from './Franchise.module.css'
import logo from '../../../public/assets/logo/сайт_6.pdf__3_-removebg-preview (1).png'

const Franchise = () => {
    return (
        <div className={style.Main}>
            <div className={style.logo}>
                <h1>ФРАНШИЗА</h1>
                <img src={logo} alt="" />
            </div>
            <div className={style.FranchiseDescrip}>
                <p>Откройте прибыльный бизнес с франшизой доставки суши Yaposhkin Rolls.</p>
                <p>Мы предлагаем готовую бизнес-модель с минимальными вложениями, быстрым</p>
                <p>запуском и высокой рентабельностью. Франчайзи получают раскрученный бренд,</p>
                <p>продуманное меню, автоматизированную IT-систему, маркетинговую поддержку</p>
                <p>и полный набор инструментов для успешного старта.</p>
            </div>
            <hr />
            <div className={style.Locations}>
                <div className={style.ActualLocations}>
                    <h1>14</h1>
                    <div className={style.actualDescrip}>
                        <p>Действуюших</p>
                        <p>локаций</p>
                    </div>
                </div>
                <div className={style.ProjectLocations}>
                    <h1>7</h1>
                    <div className={style.projectDescrip}>
                        <p>В проекте</p>
                        <p>локаций</p>
                    </div>
                </div>
                <div className={style.YaposhkinRolls}>
                    <h1>200</h1>
                    <div className={style.RollsDecrip}>
                        <p>500 Yaposhkin Rolls</p>
                        <p>к 2027 году</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Franchise