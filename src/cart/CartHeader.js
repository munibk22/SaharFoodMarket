import React, { useState } from 'react'
import { CartBasket } from './CartBasket'
import { CartMain } from './CartMain'
import data from "./Data";


export const CartHeader = (props) => {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);


    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id)
        if (exist) {
            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
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
        <div className="">
            <div className="block">
                <header> <h1 className="textalign">Shopping Cart</h1></header>
                <a href="/login" className="flex justifyend">
                    login
                    </a>
            </div>


            <div className="flexwrap justify" >
                <div className=" cartMain" style={{ maxWidth: "1000px" }}>

                    <CartMain products={products} onAdd={onAdd} />
                </div>

                {/* <div className="col-2 block padding2">
                    <CartMain products={products} />
                </div> */}

                <div className="padding2 width80 block flexcol alignitems " style={{ maxWidth: "280px" }}>
                    <CartBasket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
                </div>
            </div>

        </div>
    )
}
