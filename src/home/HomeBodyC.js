import React, { useState, useEffect } from 'react'
import axios from "axios";
import { GroceryMapper } from '../mapper/GroceryMapper';

export const HomeBodyC = (props) => {
    const [groceryItem, setGroceryItem] = useState([]);
    const { onAdd } = props;

    useEffect(() => {
        axios.get("https://saharserver.herokuapp.com/getgrocery").then((res, req) => {

            setGroceryItem(res.data);

        })
    }, [])

    return (
        <div className="App  padding1 container" style={{ border: '4px solid wheat', backgroundColor: 'white', maxWidth: '1200px' }}>
            <h1>Grocery Items</h1>
            {/* <button className="btn btn-warning" onClick={onAdd}>test to Cart</button> */}
            <div className="">

                <div className="" style={{ width: "100%" }}>
                    {/* {groceryItem.map(product => {
                        return <div className="marginright2 margintop " key={product.id}>

                            <div className="">
                                <h4>{product.groceryCo}</h4>
                            </div>
                            <div className="">
                                <strong> ${product.groceryCost.toFixed(2)} </strong>
                            </div>
                            <div className="">
                                <img src={product.groceryUrl} alt="productimage" style={{ width: "120px" }}></img>
                            </div>
                            <button onClick={() => onAdd(product)} >Add to Cart</button>
                        </div>
                    })} */}

                    <GroceryMapper groceryItem={groceryItem} onAdd={onAdd} key={groceryItem.id} />
                    {/* {groceryItem} */}
                </div>
            </div>
        </div>
    )
}
