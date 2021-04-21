import React from 'react'

export const LentilMapper = (props) => {
    return (
        <div>


            <div className="flexwrap justify">
                {props.lentilItem.map((lentil) => {
                    return <div className="marginright2 margintop " key={lentil.lentilId} style={{ maxWidth: '' }} >

                        <div className="flexcol alignitems" style={{ width: '210px', }}>

                            <div className="" style={{ height: '4rem', }}>
                                {lentil.lentilCo}  {' '}
                                {lentil.lentilTitle}-{lentil.lentilSize}
                            </div>

                            <img className=" " style={{ width: "200px", height: '200px', objectFit: 'contain' }} src={lentil.lentilUrl} alt='lentil url' />

                            <div className="margintop">
                                ${lentil.lentilCost}
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

