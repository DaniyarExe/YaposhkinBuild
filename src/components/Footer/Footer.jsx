import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.Main}>
            <div className={style.MainText}>
                <div className={style.start}>
                    <h1>НАЧНИТЕ</h1>
                </div>
                <div className={style.succesful}>
                    <h1>УСПЕШНЫЙ</h1>
                </div>
                <div className={style.business}>
                    <h1>БИЗНЕС</h1>
                </div>
                <div className={style.descrip}>
                    <p>С YAPOSHKIN ROLLS!</p>
                </div>
            </div>
            <div className={style.contactUs}>
                <p>www.yaposhkinrolls.com</p>
                <p>yaposhkinrolls@gmail.com</p>
                <p>+996 (997) 71 66 66</p>
            </div>
        </div>
    )
}

export default Footer