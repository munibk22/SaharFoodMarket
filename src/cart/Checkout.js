import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import STRIPE_PUBLISHABLE from './constants/stripe';
// import PAYMENT_SERVER_URL from './constants/server';

<script src="https://js.stripe.com/v3/"></script>

export const Checkout = (props) => {
    const [checkout, setCheckOut] = useState(false);


    // const handleToken = (token, address) => {
    //     console.log(token, address);
    //     if (token) {
    //         successPayment()
    //     }
    //     else {
    //         errorPayment()
    //     }}

    // function handleToken(token, address) {
    //     console.log(token, address);
    //     if (token) {
    //         successPayment()
    //     }
    //     else {
    //         errorPayment()
    //     }
    // }
    async function handleToken(token, addresses) {
        const response = await axios.post(
            // "https://exm21.sse.codesandbox.io/",
            { token, addresses }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success!", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    // const successPayment = data => {
    //     alert('Payment Successful');
    // };
    // const errorPayment = data => {
    //     alert('Payment Error');
    // };

    // const onToken = (amount, description) => token =>
    //     axios.post(PAYMENT_SERVER_URL,
    //         {
    //             description,
    //             source: token.id,
    //             // currency: CURRENCY,
    //             amount: amount
    //         })
    //         .then(successPayment)
    //         .catch(errorPayment);

    return (


        <div>
            <h2 className="textalign margintop10">Checkout</h2>
            <div className="width20 margintop10">
                {/* <StripeCheckout
                    // stripeKey="pk_test_51Ir9CYBbKPDTbStSEP3nWgJPTtqXvsCs52VwZIRi4dN1YV8zpdf54HtpTHCVrE49JGrel5ftRh423Y4kKUiLAqH400uIDCTF79"
                    stripeKey="pk_test_51Ir9CYBbKPDTbStSEP3nWgJPTtqXvsCs52VwZIRi4dN1YV8zpdf54HtpTHCVrE49JGrel5ftRh423Y4kKUiLAqH400uIDCTF79"
                    token={handleToken}
                    billingAddress
                    shippingAddress /> */}

            </div>
        </div>
    )
}
