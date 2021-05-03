import React from 'react'

export const GroceryMapper = (props) => {
    const { onAdd, groceryItem } = props;
    const test = () => { console.log("test"); }
    return (
        <div>


            <div className="flexwrap justify" style={{ maxWidth: '1200px' }}>

                {groceryItem.map((grocery) => {
                    return <div key={grocery.id} className="marginright2 margintop " >

                        <div className="flexcol alignitems" style={{ width: '210px', }}>

                            <div className="" style={{ height: '4rem', }}>
                                {grocery.name}  {' '}
                                {grocery.title}-{grocery.size}
                            </div>

                            <img className=" " style={{ width: "200px", height: '200px', objectFit: 'contain' }} src={grocery.img} alt='grocery url' />

                            <div className="margintop">
                                ${grocery.cost}
                            </div>


                            <div className="margintop">
                                <button className="btn btn-warning" onClick={() => onAdd(grocery)} key={grocery.id}>Add to Cart</button>
                            </div>

                        </div>
                    </div>

                })}
            </div>

        </div >
    )
}
