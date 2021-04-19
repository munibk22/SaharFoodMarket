import React from 'react'
import { Link } from 'react-router-dom'

export const InsertList = () => {
    return (
        <div>

            <Link className="btn btn-danger" to="/inserthomebody">Insert Groceries</Link>

            <div className="margintop">
                <Link className="btn btn-danger" to="/insertflours">Insert Flours</Link>
            </div>
        </div>
    )
}
