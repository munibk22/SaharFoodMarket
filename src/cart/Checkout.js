import React, { useState } from 'react'
import PayPal from './PayPal';

export const Checkout = () => {
    const [checkout, setCheckOut] = useState(false);
    return (


        <div>
            <h2 className="textalign">Checkout</h2>
            <div className="width20">
                {/* {checkout ? <PayPal /> : null} */}
                <PayPal />
            </div>
        </div>
    )
}
