import React from 'react'
import style from './PhotoCollage.module.css'
import first from "../../../../public/assets/img/Clip path group.png"
import second from "../../../../public/assets/img/2.png"
import third from "../../../../public/assets/img/3.png"
import four from "../../../../public/assets/img/4.png"
import five from "../../../../public/assets/img/5.png"
import six from "../../../../public/assets/img/6.png"
import seven from "../../../../public/assets/img/7.png"

const PhotoCollage = () => {

  return (
    <div className={style.Main}>
      <div className={style.firstBlock}>
        <div className={style.twoPackRolls}>
          <img src={first} alt="" />
        </div>
        <img src={third} alt="" />
        <img src={four} alt="" />
      </div>
      <div className={style.secondBlock}>
        <img src={second} alt="" />
        <div className={style.Chief}>
          <img src={six} alt="" />
        </div>
      </div>
      <div className={style.thirdBlock}>
        <img src={seven} alt="" />
        <img src={five} alt="" />
      </div>
      {/* {images.map((img, i) => (
        <img key={i} src={img} alt={`photo-${i}`} className={style[`img${i + 1}`]} />
      ))} */}
    </div>
  )
}

export default PhotoCollage
