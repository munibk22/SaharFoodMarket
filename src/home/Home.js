import React, { useState } from 'react'
import { CartBasket } from '../cart/CartBasket'
import { NaviBar } from '../components/NaviBar'
import { Header } from './Header'
// import { HomeBody } from './HomeBody'
import { HomeBodyC } from './HomeBodyC'

export const Home = (props) => {
    const { onAdd, cartItems, onRemove } = props;

    return (
        <div>

            {/* <Header cartItems={cartItems} onAdd={onAdd} />
            <NaviBar /> */}
            {/* <HomeBody onAdd={onAdd} test={test} /> */}
            <HomeBodyC onAdd={onAdd} />
            <div className="padding2 width80 block flexcol alignitems " style={{ maxWidth: "280px" }}>
                <CartBasket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            </div>

        </div>
    )
}
