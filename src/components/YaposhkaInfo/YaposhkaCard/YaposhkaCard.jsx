import React from 'react'
import style from './YaposhkaCard.module.css'

const YaposhkaCard = ({number, title, description}) => {
    return (
        <div className={style.YaposhkaCard}>
            <div className={style.Number}>
                <h1>{number}</h1>
            </div>
            <div className={style.header}>
                {title}
            </div>
            <div className={style.description}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default YaposhkaCard