import React from 'react'
import { Button } from 'react-bootstrap';

export const CartNav = () => {
    return (
        <div className="">
            <div className="flex justifyend ">
                <div className="" style={{ padding: '.5%' }}>

                    <Button variant="outline-success" className="btn btn-sm">login</Button>
                </div>
                <div className="" style={{ padding: '.5%', marginRight: '10px' }}>
                    {/* <a href="http://localhost:3001/logout">   <button className="btn btn-sm btn-danger">logout</button></a> */}

                    <form action="/logout?_method=DELETE" method="POST"> <Button href="http://localhost:3001/logout" variant="outline-danger" className="btn btn-sm ">logout</Button> </form>
                </div>

                <div className="" style={{ padding: '.5%' }}>
                    <Button variant="outline-primary" className="btn btn-md"><i class="fas fa-shopping-cart"></i>{" "}{" "}Shopping Cart</Button>
                </div>
            </div>
        </div>
    )
}
