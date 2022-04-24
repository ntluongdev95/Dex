import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Ecosystem from '../components/Ecosystem'
import Buy from '../components/Buy'
import Guide from '../components/Guide'
import { Link } from 'react-router-dom'
import Art from '../components/Art'
import Bottom from '../components/Bottom'
import '../styles/home.scss'
function Home() {
    return (
        <div className='wrapper'>
            <Banner />
            <Header />
            <Ecosystem />
            <Buy />
            <Guide />
            <Art />
            <Bottom />
        </div>
    )
}

export default Home
