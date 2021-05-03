import React, { useEffect, useRef } from 'react'

export default function PayPal() {
    const paypal = useRef();


    useEffect(() => {
        window.paypal.Buttons({

            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            des: "Table",
                            amount: {
                                currency_code: "USD",
                                value: 650
                            }
                        }
                    ]
                })

            }, onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log("Successfull order" + order);
            },

            onError: (err) => { console.log(err); }
        }).render(paypal.current)
    }, [])
    return (
        <div className="">
            <div ref={paypal}>

            </div>
        </div>
    )
}
