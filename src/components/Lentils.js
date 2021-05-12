import axios from 'axios'
import React, { useState, useEffect } from 'react'
import LentilMapper from '../mapper/LentilMapper';
import { connect } from "react-redux";
import { addBasket } from "../store/actions/actions"

const Lentils = (props) => {
    const [lentilItem, setLentilItem] = useState([]);
    const { addToBasket } = props;

    useEffect(() => {
        axios.get("https://saharserver.herokuapp.com/getlentils")
            .then((res) => {
                setLentilItem(res.data);
                console.log(res.data);

            })
    }, [])



    return (
        <div className="padding1"
            style={{ border: '4px solid wheat', backgroundColor: 'white', maxWidth: '1200px' }}>

            <div className="textalign ">
                <h1> Lentils</h1>
            </div>

            <div className="  width70">
                <LentilMapper lentilItem={lentilItem} addToBasket={addToBasket} />
            </div>
        </div>
    )
}

export default connect(null, { addBasket })(Lentils);