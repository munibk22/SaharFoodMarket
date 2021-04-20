import React, { useState } from 'react';
import axios from 'axios';


export const PostRice = () => {
    const [riceCo, setRiceCo] = useState("");
    const [riceTitle, setRiceTitle] = useState("");
    const [riceSize, setRicesize] = useState("");
    const [riceUrl, setRiceUrl] = useState("");
    const [riceCost, setRiceCost] = useState("");


    const riceCoHandler = (e) => {
        const val = e.target.value;
        setRiceCo(val)
    }

    const ricetitleHandler = (e) => {
        setRiceTitle(e.target.value);

    };

    const ricesizeHandler = (e) => {
        setRicesize(e.target.value);

    };

    const riceimgHandler = (e) => {
        setRiceUrl(e.target.value);

    };

    const ricecostHandler = (e) => {
        setRiceCost(e.target.value);

    };


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
        <div className="flexcol justify alignitems ">
            <h1>Insert Rices:</h1>

            <div className="flex margintop width20 ">
                <label htmlFor="co" className="width10">Rice Co</label>
                <input type='text' name='co' id='co' value={riceCo}
                    onChange={riceCoHandler}
                />
            </div>


            <div className="flex margintop justifyaround width20">
                <label htmlFor="Title" className="width15">Rice Title</label>
                <input type='text' name='Title' id='Title' value={riceTitle}
                    onChange={ricetitleHandler}
                />
            </div>


            <div className="flex margintop justifyaround width20">
                <label htmlFor="Size" className="width15">Rice Size</label>
                <input type='text' name='size' id='Size' value={riceSize}
                    onChange={ricesizeHandler}
                />
            </div>


            <div className="flex margintop justifyaround width15">
                <label htmlFor="Img">Rice Img Url</label>
                <input type='text' name='img' id='Img' value={riceUrl}
                    onChange={riceimgHandler}
                />
            </div>


            <div className="flex margintop justifyaround width15">
                <label htmlFor="Cost">Rice Cost</label>
                <input type='text' name='cost' id='Cost' value={riceCost}
                    onChange={ricecostHandler}
                />
            </div>

            <div className="flex justifyend margintop " style={{ width: '300px' }}>
                <button className="btn btn-primary" onClick={submitHandler}>Submit</button>
            </div>
        </div>
    )
}
