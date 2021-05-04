import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CartNav = () => {
    return (
        <div className="" style={{ marginRight: "15px" }}>
            <div className="flex justifyend ">
                <div className="" style={{ padding: '.5%' }}>

                    {/* <Button href="https://saharserver.herokuapp.com/login" variant="outline-success" className="btn btn-sm">login</Button> */}
                    <Button href="http://localhost:3001/login" variant="outline-success" className="btn btn-sm">login</Button>
                </div>
                <div className="" style={{ padding: '.5%', marginRight: '10px' }}>
                    {/* <a href="http://localhost:3001/logout">   <button className="btn btn-sm btn-danger">logout</button></a> */}

                    <form action="/logout?_method=DELETE" method="POST"> <Button href="http://localhost:3001/logout" variant="outline-danger" className="btn btn-sm ">logout</Button> </form>
                </div>

                <Link to="/cart" style={{ padding: '.5%' }}>
                    <Button href="" variant="outline-primary" className="btn btn-sm" style={{ fontSize: "" }}><i className="fas fa-shopping-cart" style={{ fontSize: "" }}></i>{" "}{" "}<strong>Shopping Cart</strong></Button>
                </Link>
            </div>
        </div>
    )
}
