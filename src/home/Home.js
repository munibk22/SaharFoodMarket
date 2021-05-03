import React, { useState } from 'react'
import { CartBasket } from '../cart/CartBasket'
import { NaviBar } from '../components/NaviBar'
import { Header } from './Header'
// import { HomeBody } from './HomeBody'
import { HomeBodyC } from './HomeBodyC'

export const Home = () => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);


    // function test() { console.log("test") };

    const onAdd = (product) => {
        console.log();
        const exist = cartItems.find((x) => x.id === product.id)
        if (exist) {
            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
            console.log(exist);
            console.log(cartItems);
        }
        else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);

        }
    }


    const onRemove = (product) => {
        const exist = cartItems.find((x) => { return x.id === product.id })

        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => { return x.id !== product.id }))
        }
        else {
            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
        }
    }
    return (
        <div>

            {/* <Header cartItems={cartItems} onAdd={onAdd} />
            <NaviBar /> */}
            {/* <HomeBody onAdd={onAdd} test={test} /> */}
            <HomeBodyC onAdd={onAdd} />
            <div className="padding2 width80 block flexcol alignitems " style={{ maxWidth: "280px" }}>
                <CartBasket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} key={cartItems.id} />
            </div>

        </div>
    )
}
