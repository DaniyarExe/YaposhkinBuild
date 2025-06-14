import React, { useState } from 'react'
import style from './rollsInfo.module.css'
import leftArrow from '../../assets/img/left-arrow (1).png'
import Modal from '../Modal/Modal'
import chopStick from '../../assets/img/chopstick.png'

const rollsInfo = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={style.main}>
            {isModalOpen && <Modal setModal={setIsModalOpen} />}
            <div className={style.whiteDot}></div>

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
                            <button onClick={() => setIsModalOpen(true)}>
                                <p>Получить презентацию</p>
                            </button>
                        </div>
                        <img src={leftArrow} alt="" />
                        <div className={style.requestInfo}>
                            <p>Оставьте заявку и получите</p>
                            <p>презентацию франшизы</p>
                        </div>
                    </div>
                </div>

                <div className={style.mainImg}>
                    <img src={chopStick} alt="" className={style.chopstickSushi} />
                </div>
            </div>

            <div className={style.sideInfo}>
                <div className={style.mobile}>
                    <div className={style.year}>
                        <div className={style.sideTitle}><span className={style.arrow}>{'<'}</span> 6 лет</div>
                        <div className={style.sideDescriptionY}>
                            <p>Доставляем суши, 
                                роллы и радость
                            </p>
                        </div>
                    </div>

                    <div className={style.money}>
                        <div className={style.sideTitleM}><span className={style.arrow}>{'<'}</span> 3,6 млн ₽</div>
                        <div className={style.sideDescriptionM}>
                            <p>Годовой оборот всех 
                                филиалов Yaposhkin Rolls
                            </p>
                            
                        </div>
                    </div>
                </div>

                <div className={style.order}>
                    <div className={style.sideTitle}><span className={style.arrow}>{'<'}</span> 1 200 заказов/месяц</div>
                    <div className={style.sideDescriptionO}>
                        <p>В среднем в</p>
                        <p>каждом филиале</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default rollsInfo