import React from 'react'
import style from './RollsFigures.module.css'
import logo from '../../../public/assets/logo/сайт_6.pdf__3_-removebg-preview (1).png'
import secondChopstick from '../../../public/assets/img/chopstick123.png'

const RollsFigures = () => {
    return (
        <div className={style.Main}>
            <div className={style.logo}>
                <img src={logo} alt="" />
                <h1>В ЦИФРАХ</h1>
            </div>
            <div className={style.MoneyInfo}>
                <div className={style.Moneys}>
                    <div className={style.RollsArrived}>
                        <div className={style.arrived}>
                            <p>ЧИСТАЯ ПРИБЫЛЬ
                                2.8 МЛН. В ГОД</p>
                        </div>
                        <div className={style.arrivedDescrip}>
                            <p>Бизнес с высокой маржинальностью,</p>
                            <p>позволяющий быстро выйти</p>
                            <p>на стабильную прибыль.</p>
                        </div>
                    </div>
                    <div className={style.RollsEarnings}>
                        <div className={style.Earnings}>
                            <p>ВЫРУЧКА
                                1.5 - 2 МЛН.РУБЛЕЙ
                            </p>
                        </div>
                        <div className={style.EarningsDescrip}>
                            <p>Проверенная бизнес-модель</p>
                            <p>позволяет достигать стабильного</p>
                            <p>оборота уже с первых месяцев</p>
                        </div>
                    </div>
                    <div className={style.withoutRoyalty}>
                        <h1>БЕЗ РОЯЛТИ</h1>
                        <div className={style.percent}>
                            <h1 >0%</h1>
                        </div>
                        <p>Всё, что вы зарабатываете,</p>
                        <p>остаётся у вас. Мы не забираем</p>
                        <p>процент с вашей выручки</p>
                    </div>
                </div>
                <div className={style.chopstickCenter}>
                    <img src={secondChopstick} alt="" />
                </div>
                <div className={style.Payback}>
                    <div className={style.RollsOccupancy}>
                        <div className={style.occupancy}>
                            <p>ОКУПАЕМОСТЬ</p>
                            <p>10 - 15 МЕСЯЦЕВ</p>
                        </div>
                        <div className={style.occupancyDescrip}>
                            <p>Быстро выходите в плюс</p>
                            <p>и начинайте зарабатывать</p>
                            <p>уже в первый год работы.</p>
                        </div>
                    </div>
                    <div className={style.RollsInvetments}>
                        <div className={style.investments}>
                            <p>ВЛОЖЕНИЯ</p>
                            <p>1.5 - 2 МЛН.РУБЛЕЙ</p>
                        </div>
                        <div className={style.investmentsDescrip}>
                            <p>Этого достаточно для запуска</p>
                            <p>полноценного бизнеса, включая</p>
                            <p>аренду, оборудование</p>
                            <p>и закупку продуктов</p>
                        </div>
                    </div>
                    <div className={style.LumpSum}>
                        <h1>ПАУШАЛЬНЫЙ
                            ВЗНОС ОТ</h1>
                        <p className={style.percent}>$7000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RollsFigures