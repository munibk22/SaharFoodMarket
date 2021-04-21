import React from 'react'

export const MapperRice = (props) => {
    return (
        <div className="flexwrap justifyeven" style={{ maxWidth: '1200px' }}>

            {props.riceItem.map((rice) => {
                return <div className="marginright2 margintop" key={rice.idRice}>
                    <div className="flexcol alignitems" style={{ width: '210px', }}>

                        <div className="" style={{ height: '4rem', }}>
                            {rice.riceCo}  {' '}
                            {rice.riceTitle}-{rice.riceSize}
                        </div>

                        <img className=" " style={{ width: "200px", height: '200px', objectFit: 'contain' }}
                            src={rice.riceUrl} alt='rice url' />

                        <div className="margintop">
                            ${rice.riceCost}
                        </div>

                        <div className="margintop">

                            <button className="btn btn-warning" >Add to Cart</button>
                        </div>

                    </div>
                </div>

            })}
        </div>
    )
}
