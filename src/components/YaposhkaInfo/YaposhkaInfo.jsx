import React from 'react'
import style from './YaposhkaInfo.module.css'
import logo from '../../../public/assets/img/сайт_6.pdf__3_-removebg-preview.png'
import YaposhkaCard from './YaposhkaCard/YaposhkaCard'
import PhotoCollage from './PhotoCollage/PhotoCollage'

const YaposhkaInfo = () => {

    const cardData = [
        {
            number: 1,
            title: "ОСТАВЬТЕ ЗАЯВКУ",
            description: (
                <>
                    Заполните простую форму <br />
                    на сайте, и мы свяжемся <br />
                    с вами в ближайшее время.<br />
                </>
            )
        },
        {
            number: 2,
            title: "ЗАПОЛНЕНИЕ АНКЕТЫ",
            description: (
                <>
                    Вы заполняете анкету, чтобы <br />
                    мы могли лучше понять ваш <br />
                    опыт, планы и возможности.
                </>
            )
        },
        {
            number: 3,
            title: "СОЗВОН И КОНСУЛЬТАЦИЯ",
            description: (
                <>
                    Наш менеджер расскажет вам<br />
                    обо всех деталях сотрудничества,<br />
                    ответит на вопросы и назначит<br />
                    удобное время для встречи.
                </>
            )
        },
        {
            number: 4,
            title: "ЛИЧНАЯ ВСТРЕЧА",
            description: (
                <>
                    Назначим удобное время<br />
                    для личной встречи <br />
                    и переговоров.<br />
                </>
            )
        },
        {
            number: 5,
            title: "ЗАКЛЮЧЕНИЕ ДОГОВОРА",
            description: (
                <>
                    После обсуждения всех <br />
                    условий мы подписываем <br />
                    договор, и вы становитесь <br />
                    официальным партнёром <br />
                    Yaposhkin Rolls!<br />
                </>
            )
        },
        {
            number: 6,
            title: "ПОДДЕРЖКА 24/7",
            description: (
                <>
                    Мы поддерживаем вас<br />
                    на всех этапах запуска <br />
                    и развития.<br />
                </>
            )
        },
    ];


    return (
        <div className={style.Main}>
            <div className={style.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={style.YaposhkaInfo}>
                {cardData.map((card, index) => (
                    <YaposhkaCard
                        key={index}
                        number={card.number}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
            <PhotoCollage />
        </div>
    )
}

export default YaposhkaInfo