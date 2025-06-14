import React from 'react'
import style from './YaposhkaInfo.module.css'
import logo from '../../assets/logo/logo.png'
import PhotoCollage from './PhotoCollage/PhotoCollage'
import upImg from '../../assets/img/_РµР¶РёРј_РёР·РѕР»СЏС†РёРё.png'

const YaposhkaInfo = () => {


    return (
        <div className={style.Main}>
            <div className={style.logo}>
                <img src={upImg} alt="" />
                <img src={logo} alt="" />
            </div>
            <div className={style.whiteDot}></div>
            <div className={style.PhotoCollage}>
                <PhotoCollage />
            </div>
            <div className={style.rectangle}></div>
        </div>
    )
}

export default YaposhkaInfo