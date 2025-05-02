import React from 'react'
import Header from '../header/header'
import RollsInfo from '../rollsInfo/rollsInfo'
import RollsFigures from '../RollsFigures/RollsFigures'
import style from './main.module.css'
import Franchise from '../Franchise/Franchise'
import Details from '../Details/Details'
import DarkKitchen from '../DarkKitchen/DarkKitchen'
import Island from '../Island/Island'
import Support from '../Support/Support'
import YaposhkaInfo from '../YaposhkaInfo/YaposhkaInfo'
import Portrait from '../Portrait/Portrait'
import Footer from '../Footer/Footer'

const main = () => {
    return (
        <div className={style.main}>
            <Header />
            <RollsInfo />
            <RollsFigures />
            <Franchise />
            <Details />
            <DarkKitchen />
            <Island />
            <Support />
            <Details />
            <YaposhkaInfo />
            <Portrait />
            <Footer />
        </div>
    )
}

export default main