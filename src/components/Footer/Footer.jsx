import React from 'react'
import style from './Footer.module.css'
import upImg from '../..//assets/img/_РµР¶РёРј_РёР·РѕР»СЏС†РёРё.png'

const Footer = () => {
    return (
        <div className={style.Main}>
            <div className={style.contactUs}>
                <p>www.yaposhkinrolls.com</p>
                <p>info@yaposhkin.com</p>
                <p>+996 (997) 71 66 66</p>
            </div>
            <div className={style.footImg}>
                <img src={upImg} alt="" />
                <div className={style.whiteDot}></div>
            </div>
        </div>
    )
}

export default Footer