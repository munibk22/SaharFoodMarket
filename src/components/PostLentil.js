import axios from 'axios';
import React from 'react'
import { useState } from 'react';

export const PostLentil = () => {

    const [lentilCo, setLentilco] = useState("");
    const [lentilTitle, setLentilTitle] = useState("");
    const [lentilSize, setLentilSize] = useState("");
    const [lentilUrl, setLentilUrl] = useState("");
    const [lentilCost, setLentilCost] = useState("");




    const lentilCoHandler = (e) => {
        const val = e.target.value;
        setLentilco(val);
        console.log(lentilCo);
    }


    const lentilTitleHandler = (e) => { setLentilTitle(e.target.value) };

    const lentilSizeHandler = (e) => { setLentilSize(e.target.value) };

    const lentilUrlHandler = (e) => { setLentilUrl(e.target.value) };

    const lentilCostHandler = (e) => { setLentilCost(e.target.value) };

    const submitHandler = () => {
        console.log("Submit was clicked");

        axios.post("https://saharserver.herokuapp.com/postlentil",
            { lentilCo, lentilTitle, lentilSize, lentilUrl, lentilCost })
            .then(() => {
                console.log("success");

            })
    }

    return (
        <div>
            <div className="">
                <h2>Enter Lentil Information Here</h2>
            </div>

            <div className="flex margintop">
                <label htmlFor="company" className="label">Lentil Co. :</label>
                <input id="name" value={lentilCo} name="company" type="text" onChange={lentilCoHandler} ></input>
            </div>

            <div className="flex margintop">
                <label htmlFor="Title" className="label">Lentil Title :</label>
                <input id="Title" value={lentilTitle} name="Title" type="text" onChange={lentilTitleHandler} ></input>
            </div>

            <div className="flex margintop">
                <label htmlFor="Size" className="label">Lentil Size :</label>
                <input id="Size" value={lentilSize} name="Size" type="text" onChange={lentilSizeHandler} ></input>
            </div>

            <div className="flex margintop">
                <label htmlFor="Url" className="label">Lentil Url :</label>
                <input id="Url" value={lentilUrl} name="Url" type="text" onChange={lentilUrlHandler} ></input>
            </div>

            <div className="flex margintop">
                <label htmlFor="Cost" className="label">Lentil Cost :</label>
                <input id="Cost" value={lentilCost} name="Cost" type="text" onChange={lentilCostHandler} ></input>
            </div>



            <div className="">
                <button className="btn btn-primary"
                    onClick={submitHandler}   >Submit</button>
            </div>
        </div>
    )
}
