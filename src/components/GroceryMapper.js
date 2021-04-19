import React from 'react'

export const GroceryMapper = (props) => {
    return (
        <div>


            <div className="flexwrap justifyaround">
                {props.groceryItem.map((grocery) => {
                    return <div className="marginright2 margintop " key={grocery.groceryID} style={{ maxWidth: '' }} >

                        <div className="flexcol alignitems" style={{ width: '210px', }}>

                            <div className="" style={{ height: '4rem', }}>
                                {grocery.groceryCo}  {' '}
                                {grocery.groceryTitle}-{grocery.grocerySize}
                            </div>

                            <img className=" " style={{ width: "190px", height: '180px' }} src={grocery.groceryUrl} alt='grocery url' />

                            <div className="margintop">
                                ${grocery.groceryCost}
                            </div>

                            <div className="margintop">

                                <button className="btn btn-warning" >Add to Cart</button>
                            </div>

                        </div>
                    </div>

                })}
            </div>

        </div>
    )
}
