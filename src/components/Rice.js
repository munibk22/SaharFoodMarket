import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { MapperRice } from '../mapper/MapperRice';



export const Rice = () => {
    const [riceItem, setRiceItem] = useState([]);


    useEffect(() => {
        axios.get("https://saharserver.herokuapp.com/getrice")
            .then((res) => {
                setRiceItem(res.data);

            })
    }, [])


    return (
        <div className=" " style={{ border: '4px solid wheat', backgroundColor: 'white', maxWidth: '1200px' }}>

            <div className="textalign">
                <h1> Rices</h1>
            </div>
            <div className="flex justifyevenwrap width70 ">
                <MapperRice riceItem={riceItem} />
            </div>
        </div>
    )
}
