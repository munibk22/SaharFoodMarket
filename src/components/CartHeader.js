import React from 'react'
import { CartBasket } from './CartBasket'
import { CartMain } from './CartMain'

export const CartHeader = (props) => {
    return (
        <div className="">
            Cart Header

            <div className="">
                <CartMain />
            </div>

            <div className="">
                <CartBasket />
            </div>
        </div>
    )
}
