import { Button } from 'react-bootstrap';
import React from 'react'

export const CartBasket = (props) => {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => { return a + c.price * c.qty }, 0);

    const shippingPrice = itemsPrice > 60 ? 0 : 10;
    const totalPrice = itemsPrice + shippingPrice;


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
                return <div key={item.id} className="flexcol alignitems">
                    <img className="" style={{ width: "100px" }} src={item.image} alt="">

                    </img>
                    <div className="">
                        {item.name}
                    </div>
                    <div className="padding2">
                        <button className="btn btn-primary btn-small " onClick={() => onAdd(item)}>+</button> {" "}
                        <button className="btn btn-danger btn-small" onClick={() => onRemove(item)}>-</button>
                    </div>
                    <div className="">
                        {item.qty} x ${item.price}
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
                <Button href="/checkout" className="btn btn-warning">Checkout</Button>
            </div>
        </aside >
    )
}
