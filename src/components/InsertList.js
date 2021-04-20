import React from 'react'
import { Link } from 'react-router-dom'

export const InsertList = () => {
    return (
        <div>

            <Link className="btn btn-danger" to="/inserthomebody">Insert Groceries</Link>

            <div className="margintop">
                <Link className="btn btn-danger" to="/postflours">Insert Flours</Link>
            </div>
            <div className="margintop">
                <Link className="btn btn-danger" to="/postbreads">Insert Breads
</Link>
            </div>
            <div className="margintop">
                <Link className="btn btn-danger" to="/postlentils">Insert Lentils</Link>
            </div>
            <div className="margintop">
                <Link className="btn btn-danger" to="/postoils">Insert Oils</Link>
            </div>
            <div className="margintop">
                <Link className="btn btn-danger" to="/postspices">Insert Spices</Link>
            </div>

            <div className="margintop">
                <Link className="btn btn-danger" to="/postrice">Insert Rices</Link>
            </div>
        </div>
    )
}
