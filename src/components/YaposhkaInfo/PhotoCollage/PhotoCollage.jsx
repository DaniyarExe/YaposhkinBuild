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
     <div className={style.gridWrapper}>
      <div className={style.column}>
        <img src={first} alt="1" />
        <img src={five} alt="2" />
        <img src={six} alt="3" />
      </div>
      <div className={style.column}>
        <img src={second} alt="4" />
        <img src={four} alt="5" />
      </div>
      <div className={style.column}>
        <img src={third} alt="6" />
        <img src={seven} alt="7" />
      </div>
    </div>
  )
}

export default PhotoCollage
