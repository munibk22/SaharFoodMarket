import React from 'react'

export const GroceryMapper = (props) => {
    const { onAdd, groceryItem } = props;
    const test = () => { console.log("test"); }
    return (
        <div>


            <div className="flexwrap justify" style={{ maxWidth: '1200px' }}>

                {groceryItem.map((grocery) => {
                    return <div className="marginright2 margintop " key={grocery.groceryID} >

                        <div className="flexcol alignitems" style={{ width: '210px', }}>

                            <div className="" style={{ height: '4rem', }}>
                                {grocery.groceryCo}  {' '}
                                {grocery.groceryTitle}-{grocery.grocerySize}
                            </div>

                            <img className=" " style={{ width: "200px", height: '200px', objectFit: 'contain' }} src={grocery.groceryUrl} alt='grocery url' />

                            <div className="margintop">
                                ${grocery.groceryCost}
                            </div>


                            <div className="margintop">
                                <button className="btn btn-warning" onClick={(grocery) => onAdd(grocery)} key={grocery.groceryID} >Add to Cart</button>
                            </div>

                        </div>
                    </div>

                })}
            </div>

        </div >
    )
}
