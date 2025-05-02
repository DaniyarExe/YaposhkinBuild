import React from 'react'
import style from './header.module.css'
import appStore from '../../../public/assets/logo/app-store.png'
import googlePlay from "../../../public/assets/logo/google-play.png"
import logo from '../../../public/assets/logo/сайт_6.pdf__3_-removebg-preview (1).png'

const header = () => {
    return (
        <div className={style.main}>
            <div className={style.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={style.linkToApp}>
                <div className={style.appStore}>
                    <a href="">
                        <img src={appStore} alt="" />
                        <p>App Store</p>
                    </a>
                </div>
                <div className={style.google}>
                    <a href="">
                        <img src={googlePlay} alt="" />
                        <p>Google Play</p>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default header