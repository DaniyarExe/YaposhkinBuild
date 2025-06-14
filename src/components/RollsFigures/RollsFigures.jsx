import React from 'react'
import style from './RollsFigures.module.css'
import secondChopstick from '../../assets/img/Монтажная область 1@4x 2.png'
import list from '../../assets/img/Монтажная область 3@4x 1.png'

const RollsFigures = () => {
    return (
        <div className={style.Main}>
            <div className={style.logo}>
                <h1 className={style.outlinedText}>НАШИ ЦИФРЫ</h1>
            </div>
            <div className={style.MoneyInfo}>
                <div className={style.Moneys}>
                    <div className={style.arrived}>
                        <p>ЧИСТАЯ ПРИБЫЛЬ</p>
                        <p>2.8 МЛН. В ГОД</p>
                    </div>
                    <div className={style.withoutRoyalty}>
                        <div className={style.royaltyTitle}>
                            <h1>БЕЗ</h1>
                            <span className={style.percent}>0%</span>
                            <h1>РОЯЛТИ</h1>
                        </div>
                        <p>Всё, что вы зарабатываете,</p>
                        <p>остаётся у вас.</p>
                        <p>Мы не забираем</p>
                        <p>процент с вашей выручки</p>
                    </div>

                </div>
                <div className={style.chopstickCenter}>
                    <img src={secondChopstick} alt="" />
                     <div className={style.gradientOverlay}></div>
                </div>
                <div className={style.Payback}>
                    <div className={style.RollsOccupancy}>
                        <div className={style.occupancy}>
                            <p>ОКУПАЕМОСТЬ</p>
                            <p>10 - 15 МЕСЯЦЕВ</p>
                        </div>
                    </div>
                    <div className={style.LumpSum}>
                        <h1>ПАУШАЛЬНЫЙ</h1>
                        <span className={style.secondH}>ВЗНОС ОТ</span>
                        <p className={style.buks}>7000$</p>
                        <img src={list} alt="" className={style.list}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RollsFigures