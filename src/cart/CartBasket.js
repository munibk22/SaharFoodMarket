import { Button } from 'react-bootstrap';
import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Elements } from "@stripe/react-stripe-js"

import { loadStripe } from '@stripe/stripe-js';

<script src="https://js.stripe.com/v3/"></script>

// const stripePromise = loadStripe('pk_test_51Ir9CYBbKPDTbStSEP3nWgJPTtqXvsCs52VwZIRi4dN1YV8zpdf54HtpTHCVrE49JGrel5ftRh423Y4kKUiLAqH400uIDCTF79');

export const CartBasket = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => { return a + c.cost * c.qty }, 0);

    const shippingPrice = itemsPrice > 60 ? 0 : 10;
    const totalPrice = itemsPrice + shippingPrice;
    const PUBLIC_KEY = "pk_test_51Ir9CYBbKPDTbStSEP3nWgJPTtqXvsCs52VwZIRi4dN1YV8zpdf54HtpTHCVrE49JGrel5ftRh423Y4kKUiLAqH400uIDCTF79";
    const stripeTestPromise = loadStripe(PUBLIC_KEY)


    // const [checkout, setCheckOut] = useState(false);

    // function handleToken(token, address) {
    //     console.log(token, address);
    // }

    async function handleToken(token, addresses) {
        console.log("handleToken" + token);
        const response = await axios.post(
            // "https://serverstripe.herokuapp.com/create-payment-intent"
            "http://localhost:4000/checkout"
            ,
            { token, cartItems }

        );
        // successUrl:"https://saharfoodmarket.tk/"
        const { status } = response.data;
        console.log("Response:", response.data);

        if (status === "success") {

            toast("Success!", { type: "success" });

        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    // const handleToken = async (e) => {
    //     e.preventDefault()
    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: "card",
    //         card: elements.getElement(CardElement)
    //     })


    //     if (!error) {
    //         try {
    //             const { id } = paymentMethod
    //             const response = await axios.post("https://serverstripe.herokuapp.com/checkout", {
    //                 amount: 1000,
    //                 id
    //             })

    //             if (response.data.success) {
    //                 console.log("Successful payment")
    //                 setSuccess(true)
    //             }

    //         } catch (error) {
    //             console.log("Error", error)
    //         }
    //     } else {
    //         console.log(error.message)
    //     }
    // }

    const onToken = (token) => {



        fetch('http://localhost:4000/payment', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert(`We are in business, ${data.email}`);
            });
        });
    }


    const makePayment = (token) => {
        const body = {
            token,
            cartItems
        }

        const headers = {
            "Content-Type": "application/json"
        }

        return fetch('http://localhost:4000/payment', {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        }).then(response => {
            console.log(response);
            //    console.log(status);
        });
    }

    return (
        <aside className="">
            <div className="">
                <h3 className="textalign">Basket</h3>
            </div>

            <hr ></hr>
            <div className="">
                {cartItems.length === 0 && <div className="">Cart Is Empty</div>}

            </div>

            {cartItems.map((item) => {
                return <div key={item.id} className="flexcol alignitems margintop10">
                    <img className="" style={{ width: "80px" }} src={item.img} alt="">

                    </img>
                    <div className="">
                        {item.name}
                    </div>
                    <div className="padding2">
                        <button className="btn btn-danger btn-small" onClick={() => onRemove(item)}>-</button>{" "}
                        <button className="btn btn-primary btn-small " onClick={() => onAdd(item)}>+</button>

                    </div>
                    <div className="">
                        {item.qty} x ${item.cost}
                    </div>
                </div>
            })}

            {cartItems.length !== 0 && <div className="" style={{ fontSize: ".9rem" }}>
                <hr></hr>
                <div className="flexwrap justify ">
                    Items Price:  &nbsp;
                    <div className="">
                        ${itemsPrice.toFixed(2)}
                    </div>
                </div>
                <div className="flexwrap justify margintop">
                    Order Shipping:  &nbsp;
                    <div className="">
                        ${shippingPrice.toFixed(2)}
                    </div>
                </div>
                <div className="flexwrap justify  margintop">
                    <strong> Order Total: </strong> &nbsp;
                    <div className="">
                        ${totalPrice.toFixed(2)}
                    </div>
                </div>
            </div >}
            <hr></hr>
            <div className="" style={{ display: "grid" }}>
                {/* <Button href="/checkout" className="btn btn-warning">Checkout</Button> */}

                {/* <button role="link">
                    Checkout
    </button> */}

                <div className="flex justify margintop10 " >
                    <StripeCheckout
                        stripeKey="pk_live_51Ir9CYBbKPDTbStS9MNHhAQ5SukiFbASeC3JrqNoV8kRz0nzXI08Zgl5HS7x1dLLTCQA3RGXVHWt31VAvBKAByGI00sOhlwst0"
                        // "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"
                        token={makePayment}
                        billingAddress
                        shippingAddress
                        amount={totalPrice.toFixed(2) * 100}

                        description={cartItems.map((item) => { return item.title })}
                        name={cartItems.map((item) => { return item.name })}

                    >
                        <Button variant="primary" size="lg" >Pay Now</Button >
                    </StripeCheckout>

                    {/* className="btn btn-primary btn-block" */}
                </div>


            </div>
        </aside >
    )
}
