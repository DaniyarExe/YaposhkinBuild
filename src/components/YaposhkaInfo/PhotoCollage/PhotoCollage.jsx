import React from 'react'
import style from './PhotoCollage.module.css'
import first from '../../../assets/img/Rectangle 18.png'
import second from '../../../assets/img/Rectangle 19.png'
import third from '../../../assets/img/Rectangle 20.png'
import four from '../../../assets/img/Rectangle 21.png'
import five from '../../../assets/img/Rectangle 22.png'
import six from '../../../assets/img/Rectangle 23.png'
import seven from '../../../assets/img/Rectangle 24.png'


const PhotoCollage = () => {

  return (
    <div className={style.Main}>
      <div className={style.firstBlock}>
        <div className={style.twoPackRolls}>
          <img src={first} alt="" />
        </div>
        <img src={five} alt="" />
        <img src={six} alt="" />
      </div>
      <div className={style.secondBlock}>
        <div className={style.Chief}>
          <img src={second} alt="" />
        </div>
        <div className={style.Chieff}>

          <img src={four} alt="" />
        </div>
      </div>
      <div className={style.thirdBlock}>
        <div className={style.manySushi}>
          <img src={third} alt="" />
        </div>
        <div className={style.packRoll}>
          <img src={seven} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PhotoCollage
