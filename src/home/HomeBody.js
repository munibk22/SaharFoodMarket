import React, { useEffect, useState } from 'react'
import axios from "axios";
import { GroceryMapper } from '../mapper/GroceryMapper';


export default function HomeBody(props) {
    const [groceryItem, setGroceryItem] = useState([]);
    const { onAdd, test } = props;

    useEffect(() => {
        axios.get("https://saharserver.herokuapp.com/getgrocery").then((res, req) => {

            setGroceryItem(res.data);

        })
    }, [])

    return (
        <div className="App width70 padding1 " style={{ border: '4px solid wheat', backgroundColor: 'white', maxWidth: '1200px' }}>
            <h1>Grocery Items</h1>
            <button className="btn btn-warning" onClick={test}>test to Cart</button>
            <div className="width70">
                <GroceryMapper groceryItem={groceryItem} onAdd={onAdd} key={groceryItem.groceryID} />
                {/* {groceryItem} */}
            </div>
        </div>
    )
}
