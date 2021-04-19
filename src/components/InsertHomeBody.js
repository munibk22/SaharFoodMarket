import React, { useState, useEffect } from 'react';
import axios from "axios";


export const InsertHomeBody = () => {

    const [groceryCo, setGroceryCo] = useState("");
    const [groceryTitle, setGroceryTitle] = useState("");
    const [grocerySize, setGrocerySize] = useState("");
    const [groceryUrl, setGroceryUrl] = useState("");
    const [groceryCost, setGroceryCost] = useState(0)

    useEffect(() => {
        axios.get("https://192.168.0.4:3001/getgrocery")
            .then((res) => {
                console.log(res.data);

            })
    }, [])

    const coHandler = (e) => {
        setGroceryCo(e.target.value);

    };

    const titleHandler = (e) => {
        setGroceryTitle(e.target.value);

    };

    const sizeHandler = (e) => {
        setGrocerySize(e.target.value);

    };

    const imgHandler = (e) => {
        setGroceryUrl(e.target.value);

    };

    const costHandler = (e) => {
        setGroceryCost(e.target.value);

    };


    const submitHandler = () => {
        console.log("I was clicked to Submit");
        axios.post(
            "http://localhost:3001/postgrocery", { groceryCo, groceryTitle, grocerySize, groceryUrl, groceryCost })
            .then(() => {
                console.log("success");
                setGroceryUrl("")
            })
    };



    return (
        <div style={{ marginTop: '3%' }}>
            <h2> Insert Grocery Item:</h2>
            <div className="margintop10">
                <label htmlFor="company" className="label">Grocery Co. :</label>
                <input id="name" value={groceryCo} name="company" type="text" onChange={coHandler} ></input>
            </div>
            <div className="margintop">
                <label htmlFor="title" className="label">Grocery Title :</label>
                <input id="name" value={groceryTitle} name="title" type="text" onChange={titleHandler}></input>
            </div>
            <div className="margintop">
                <label htmlFor="size" className="label">Grocery Size :</label>
                <input id="name" value={grocerySize} name="size" type="text" onChange={sizeHandler}></input>
            </div>

            <div className="margintop">
                <label htmlFor="url" className="label">Image Url:</label>
                <input id="name" value={groceryUrl} name="url" type="text" onChange={imgHandler}></input>
            </div>

            <div className="margintop">
                <label htmlFor="cost" className="label">Grocery Cost :</label>
                <input id="name" name="cost" type="text" value={groceryCost} onChange={costHandler}></input>

            </div>

            <div className="flex justifyend margintop">
                <button className="btn btn-primary" onClick={submitHandler} >Submit</button>
            </div>


            <div className="">

            </div>
        </div>
    )
}
