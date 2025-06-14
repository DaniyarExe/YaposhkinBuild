import React from 'react'
import style from './header.module.css'
import appStore from '../../assets/logo/apple.png'
import googlePlay from "../../assets/logo/google.png"
import logo from '../../assets/logo/logo.png'
import upImg from '../../assets/img/_РµР¶РёРј_РёР·РѕР»СЏС†РёРё.png'

const header = () => {
    return (
        <div className={style.main}>
            <div className={style.nav}>
                <div className={style.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={style.linkToApp}>
                    <div className={style.appStore}>
                        <a href="">
                            <img src={appStore} alt="" />
                        </a>
                    </div>
                    <div className={style.google}>
                        <a href="">
                            <img src={googlePlay} alt="" />
                        </a>

                    </div>
                </div>
            </div>
            <div className={style.downImg}>
                <img src={upImg} alt="" />
            </div>
        </div>
    )
}

export default header