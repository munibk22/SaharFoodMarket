import React, { useEffect, useState } from 'react'
import axios from "axios";
import { GroceryMapper } from '../components/GroceryMapper';


export const HomeBody = () => {
    const [groceryItem, setGroceryItem] = useState([]);

    useEffect(() => {
        axios.get("https://192.168.0.4:3001/getgrocery").then((res, req) => {

            setGroceryItem(res.data);

        })
    }, [])

    return (
        <div className="App width70 padding1 " style={{ border: '4px solid wheat', backgroundColor: 'white', maxWidth: '1200px' }}>
            <h1>Grocery Items</h1>
            <div className="">
                <GroceryMapper groceryItem={groceryItem} />
                {/* {groceryItem} */}
            </div>
        </div>
    )
}
