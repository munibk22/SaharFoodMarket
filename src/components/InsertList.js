import React from 'react'
import { Link } from 'react-router-dom'

export const InsertList = () => {
    return (
        <div>

            <Link className="btn btn-danger" to="/inserthomebody">Insert Groceries</Link>

            <div className="margintop">
                <Link className="btn btn-danger" to="/insertflours">Insert Flours</Link>
            </div>
            <div className="margintop">
                <Link className="btn btn-danger" to="/insertbreads">Insert Breads
</Link>
            </div>
            <div className="margintop">
                <Link className="btn btn-danger" to="/insertlentils">Insert Lentils</Link>
            </div>
            <div className="margintop">
                <Link className="btn btn-danger" to="/insertoils">Insert Oils</Link>
            </div>
            <div className="margintop">
                <Link className="btn btn-danger" to="/insertspices">Insert Spices</Link>
            </div>
        </div>
    )
}
