import React from 'react';
import axios from 'axios';
import { useState } from 'react';



export const PostOil = () => {

    const [oilCo, setCoItem] = useState("");



    const oilCoHandler = (e) => { setCoItem(e.target.value) };


    const submitHandler = () => {
        axios.post("https://saharserver.herokuapp.com/postoils", { oilCo })
            .then((err, res) => {
                if (!res) {
                    console.log("err post" + err);
                }
                else {
                    console.log("success post");
                }
            })
    }

    return (
        <div>
            <div className="">
                <h2>Insert Oil/Ghee Information:</h2>
            </div>

            <div className=" flex">
                <label htmlFor="co" className="label">Oil Company:</label>
                <input id='co' value={oilCo} type='text' name="oilCo" onChange={oilCoHandler} />
            </div>

            <div className="">
                <button onClick={submitHandler} className="btn btn-primary" >Submit</button>
            </div>
        </div>
    )
}
