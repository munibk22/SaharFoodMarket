import axios from 'axios';
import React, { useEffect, useState } from "react";

// axios.defaults.baseURL = 'https://saharserver.herokuapp.com/';



const riceList = () => {

    const [rice, setRice] = useState([]);

    useEffect(() => {
        axios.get("https://saharserver.herokuapp.com/getrice").then((res, req) => {

            setRice(res.data);
            console.log(res.data);
        })
    }, [])


};




export default riceList;