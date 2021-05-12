import React, { useState, Component } from 'react'
import { CartBasket } from '../cart/CartBasket'

// import { HomeBody } from './HomeBody'
import HomeBodyC from './HomeBodyC'
import { connect } from "react-redux";
import { addBasket } from "../store/actions/actions"



function Home(props) {
    // const [basketNumbers, setBasketNumbers] = useState(0);

    const { onAdd, cartItems, onRemove, addToBasket } = props;
    console.log(props);

    // const addToBasket = (grocery) => {
    //     console.log('adding to basket' + props.cartItems);
    //     setBasketNumbers(basketNumbers + 1);



    // }

    return (
        <div>

            {/* <Header cartItems={cartItems} onAdd={onAdd} /> */}

            <HomeBodyC onAdd={onAdd} addToBasket={addToBasket} />
            {/* <div className="margintop">
                {cartItems.length > 0 ? <div className="padding2 width80 block flexcol alignitems " style={{ maxWidth: "290px" }}>
                    <CartBasket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}

                        key={cartItems.id} />
                </div> : null}
            </div> */}

        </div>
    )
}
// export default Home;

export default connect(null, { addBasket })(Home);


