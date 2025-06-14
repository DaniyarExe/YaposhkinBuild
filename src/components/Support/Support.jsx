import React from 'react'
import style from "./Support.module.css"

const Support = () => {
    return (
        <div className={style.Main}>
            <div className={style.rectangle}></div>
            <div className={style.SupportMain}>
                <h1>ПОДДЕРЖКА ФРАНЧАЙЗИ</h1>
            </div>
            <div className={style.BussinesInfo}>
                <div className={style.rectangle1}></div>
                <div className={style.website}>
                    <div className={style.websiteHeader}>
                        <p>САЙТ / ПРИЛОЖЕНИЕ</p>
                    </div>
                    <div className={style.webDescrip}>
                        <p>Вы получите индивидуальный сайт</p>
                        <p>и мобильное приложение, полностью</p>
                        <p>интегрированные в систему заказов,</p>
                        <p>что позволит вам эффективно управлять</p>
                        <p>продажами и клиентской базой.</p>
                    </div>
                </div>
                <div className={style.rectangle1}></div>
                <div className={style.crmSystem}>
                    <div className={style.systemHeader}>
                        <p>CRM-СИСТЕМА</p>
                    </div>
                    <div className={style.systemDescrip}>
                        <p>Современная система управления</p>
                        <p>заказами и клиентами обеспечит</p>
                        <p>прозрачный учет, аналитику</p>
                        <p>и автоматизацию бизнес-процессов.</p>
                    </div>
                </div>
                <div className={style.rectangle1}></div>
                <div className={style.marketing}>
                    <div className={style.marketingHeader}>
                        <p>ЭФФЕКТИВНЫЙ МАРКЕТИНГ</p>
                    </div>
                    <div className={style.marketingDescrip}>
                        <p>Франчайзи получают доступ</p>
                        <p>к централизованной маркетинговой</p>
                        <p>поддержке: через агрегаторыи другие</p>
                        <p>инструменты для привлечения клиентов.</p>
                    </div>
                </div>
            </div>
            <div className={style.rectangle}></div>
        </div>
    )
}

export default Support