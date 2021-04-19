import React from 'react'
import { NaviBar } from '../components/NaviBar'
import { Header } from './Header'
import { HomeBody } from './HomeBody'

export const Home = () => {
    return (
        <div>
            <Header />
            <NaviBar />
            <HomeBody />

        </div>
    )
}
