import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux';
import { CartBasket } from '../cart/CartBasket';
import { MapperRice } from '../mapper/MapperRice';
import { addBasket } from "../store/actions/actions";



export const Rice = (props) => {
    const [riceItem, setRiceItem] = useState([]);
    const { onAdd, cartItems, onRemove, addToBasket } = props;


    useEffect(() => {
        axios.get("https://saharserver.herokuapp.com/getrice")
            .then((res) => {
                setRiceItem(res.data);

            })
    }, [])


    return (
        <div className="padding1 " style={{ border: '4px solid wheat', backgroundColor: 'white', maxWidth: '1200px' }}>

            <div className="textalign ">
                <h1> Rices</h1>
            </div>
            <div className=" width70 ">
                <MapperRice riceItem={riceItem} onAdd={onAdd} onRemove={onRemove} addToBasket={addToBasket} />
            </div>

        </div>
    )
}

export default connect(null, { addBasket })(Rice);