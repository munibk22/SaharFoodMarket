import React, { useState } from 'react';
import axios from 'axios';


export const PostRice = () => {
    const [riceCo, setRiceCo] = useState("");


    const riceCoHandler = (e) => {
        const val = e.target.value;
        setRiceCo(val)
    }


    const submitHandler = () => {
        console.log("Clicked" + riceCo);
        axios.post("https://saharserver.herokuapp.com/postrice", { riceCo })
            .then((err, res) => {
                if (!res) {
                    console.log("There was the following err :" + err);
                }
                else {
                    console.log("sucess post :" + res);
                }
            })

    };


    return (
        <div className="flexcol justify alignitems">
            <h1>Insert Rices:</h1>

            <div className="flex margintop justifyaround width15">
                <label htmlFor="co">Rice Co</label>
                <input type='text' name='co' id='co' value={riceCo}
                    onChange={riceCoHandler}
                />
            </div>

            <div className="">
                <button className="btn btn-primary" onClick={submitHandler}>Submit</button>
            </div>
        </div>
    )
}
