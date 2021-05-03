import React from 'react'
import "../css/flex.css";


export const CartMain = (props) => {
    const { products, onAdd } = props;



    return (
        <div className="col-2 block padding2 flexcol">

            <h2 style={{}} className="textalign">Products</h2>

            <hr></hr>
            <div className="" style={{ width: "100%" }}>
                {products.map(product => {
                    return <div className="flexwrap padding2 alignitems justifyaround" key={product.id}>

                        <div className="">
                            <h4>{product.name}</h4>
                        </div>
                        <div className="">
                            <strong> ${product.cost.toFixed(2)} </strong>
                        </div>
                        <div className="">
                            <img src={product.img} alt="productimage" style={{ width: "120px" }}></img>
                        </div>
                        <button onClick={() => onAdd(product)} >Add to Cart</button>
                    </div>
                })}
            </div>
        </div>
    )
}
