import React, { useState, useEffect } from 'react'
import axios from "axios";
// import { GroceryMapperB } from '../mapper/GroceryMapperB';
import { connect } from "react-redux";
import { addBasket } from "../store/actions/actions"

const HomeBodyC = (props) => {
    const [groceryItem, setGroceryItem] = useState([]);
    const { onAdd, addToBasket } = props;
    // const [loading, setLoading] = useState(false);
    // const [err, setErr] = useState(false);




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
                    <div className="flexwrap justify" style={{ maxWidth: '1200px' }}>

                        {groceryItem.map((grocery) => {
                            return <div className="marginright2 margintop " key={grocery.id} >

                                <div className="flexcol alignitems" style={{ width: '210px', }}  >

                                    <div className="" style={{ height: '4rem', }}>
                                        {grocery.name}  {' '}
                                        {grocery.title}-{grocery.size}
                                    </div>

                                    <img className=" " style={{ width: "200px", height: '200px', objectFit: 'contain' }} src={grocery.img} alt='grocery url' />

                                    <div className="margintop">
                                        ${grocery.cost}
                                    </div>


                                    <div className="margintop">
                                        <button className="btn btn-warning"
                                            onClick={() => { addToBasket(grocery); onAdd(grocery); }}
                                            // onClick={() => { addToBasket(grocery) }}
                                            // onClick={addToBasket}
                                            key={grocery.id}>Add to Cart</button>
                                    </div>

                                </div>
                            </div>

                        })}
                    </div>


                    {/* <GroceryMapperB groceryItem={groceryItem} onAdd={onAdd} key={groceryItem.id} /> */}
                    {/* {groceryItem} */}
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         products: state.shop.products
//     }
// }

export default connect(null, { addBasket })(HomeBodyC);
