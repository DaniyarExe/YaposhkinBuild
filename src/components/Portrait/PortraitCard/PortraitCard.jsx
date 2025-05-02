import React from 'react'
import style from './PortraitCard.module.css'

const PortraitCard = ({title, description}) => {
    return (
        <div className={style.Portrait}>
            <div className={style.header}>
                <p>{title}</p>
            </div>
            <div className={style.description}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default PortraitCard