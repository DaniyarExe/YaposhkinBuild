import React, { useState } from 'react'
import style from './Details.module.css'
import logo from '../../../public/assets/img/сайт_6.pdf__3_-removebg-preview.png'

const Details = () => {

    const [value, setValue] = useState("")

    const handleChange = (e) => {
        const input = e.target.value;
        const onlyNums = input.replace(/[^\d+-]/g, "");
        setValue(onlyNums)
    }

    return (
        <div className={style.Main}>
            <div className={style.MainText}>
                <div className={style.salaryText}>
                    <h1>ЗАРАБАТЫВАЙТЕ ОТ 300 000 РУБЛЕЙ</h1>
                    <h1>В МЕСЯЦ НА РАСТУЩЕМ РЫНКЕ ОБЩЕПИТА</h1>
                    <div className={style.logoText}>
                        <h1>С ПОМОЩЬЮ ФРАНШИЗЫ</h1>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.Description}>
                <p>Оставьте свой номер телефона и получите подробности в WhatsApp!</p>
            </div>
            <div className={style.phoneNumberInput}>
                <input type="text" placeholder='Телефон*' value={value} onChange={handleChange} inputMode='numeric' />
                <button>получить подробности</button>
            </div>
        </div>
    )
}

export default Details