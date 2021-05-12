import React from 'react'
import { connect } from "react-redux";
import { addBasket } from "../store/actions/actions"

const LentilMapper = (props) => {
    const { addToBasket } = props;


    const test = () => console.log("lentil button");
    return (
        <div>


            <div className="flexwrap justify" style={{ maxWidth: '1200px' }}>
                {props.lentilItem.map((lentil) => {
                    return <div className="marginright2 margintop " key={lentil.lentilId} style={{ marginLeft: '' }} >

                        <div className="flexcol alignitems" style={{ width: '210px', }}>

                            <div className="flex justify aligntext" style={{ height: '4rem', }}>
                                {lentil.lentilCo}  {' '}
                                {lentil.lentilTitle}-{lentil.lentilSize}
                            </div>

                            <img className=" " style={{ width: "200px", height: '200px', objectFit: 'contain' }} src={lentil.lentilUrl} alt='lentil url' />

                            <div className="margintop">
                                ${lentil.lentilCost}
                            </div>

                            <div className="margintop">

                                <button className="btn btn-warning"
                                    onClick={addToBasket}

                                // onClick={() => {
                                //     console.log("lentil button");
                                //     addToBasket(lentil);
                                // }}

                                >Add to Cart</button>
                            </div>

                        </div>
                    </div>

                })}
            </div>

        </div>


    )
}

export default connect(null, { addBasket })(LentilMapper);

