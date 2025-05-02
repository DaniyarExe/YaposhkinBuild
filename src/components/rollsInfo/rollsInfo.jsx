import React from 'react'
import style from './rollsInfo.module.css'
import chopstickRoll from '../../../public/assets/img/сайт_6.pdf__2_-removebg-preview.png'
import leftArrow from '../../../public/assets/img/left-arrow (1).png'
import rightdArrow from '../../../public/assets/img/right-chevron (2).png'

const rollsInfo = () => {
    return (
        <div className={style.main}>
            <div className={style.mainInfo}>
                <div className={style.info}>
                    <div className={style.logoInfo}>
                        <h1>ОТКРОЙТЕ</h1>
                        <h1>ДОСТАВКУ РОЛЛОВ</h1>
                    </div>
                    <div className={style.description}>
                        <p>всего за <strong>6 недель</strong> и начните получать</p>
                        <p>от <strong>2 800 000 рублей</strong> чистой прибыли в год</p>
                    </div>
                    <div className={style.request}>
                        <div className={style.getPresentation}>
                            <a href="">
                                <p>Получить презентацию</p>
                            </a>
                        </div>
                        <div className={style.requestInfo}>
                            <img src={leftArrow} alt="" />
                            <p>Оставьте заявку и получите презентацию франшизы</p>
                        </div>
                    </div>
                </div>

                <div className={style.mainImg}>
                    <img src={chopstickRoll} alt="" />
                </div>

            </div>

            <div className={style.sideInfo}>
                <div className={style.years}>
                    <div className={style.yearImg}>
                        <img src={rightdArrow} alt="" />
                        <p className={style.Utlra}><strong>6 лет</strong></p>
                    </div>
                    <div className={style.yearInfo}>
                        <p>Доставляем суши, роллы и радость</p>
                    </div>
                </div>
                <div className={style.moneys}>
                    <div className={style.moneyImg}>
                        <img src={rightdArrow} alt="" />
                        <p><strong>от 3,6 млн ₽</strong></p>
                    </div>
                    <div className={style.moneyInfo}>
                        <p>Годовой оборот всех филиалов yaposhka rolls</p>
                    </div>
                </div>
                <div className={style.orders}>
                    <div className={style.orderImg}>
                        <img src={rightdArrow} alt="" />
                        <p><strong>от 1 200 заказов/мес</strong></p>
                    </div>
                    <div className={style.orderInfo}>
                        <p>В среднем в каждом филиале</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default rollsInfo