import React from 'react'
import { CartBasket } from '../cart/CartBasket';

export const MapperRice = (props) => {
    const { onAdd, cartItems, onRemove, addToBasket } = props;
    return (
        <div className="flexwrap justify " style={{ maxWidth: '1200px' }}>

            {props.riceItem.map((rice) => {
                return <div className="marginright2 margintop" key={rice.id}>
                    <div className="flexcol alignitems" style={{ width: '210px', }}>

                        <div className="" style={{ height: '4rem', }}>
                            {rice.name}  {' '}
                            {rice.title}-{rice.size}
                        </div>

                        <img className=" " style={{ width: "200px", height: '200px', objectFit: 'contain' }}
                            src={rice.img} alt='rice url' />

                        <div className="margintop">
                            ${rice.cost}
                        </div>

                        <div className="margintop">

                            <button className="btn btn-warning"
                                // onClick={addToBasket}
                                onClick={() => {
                                    addToBasket(rice);
                                    onAdd(rice);
                                }}
                            >Add to Cart</button>
                        </div>

                    </div>
                </div>
            })}


        </div>
    )
}
