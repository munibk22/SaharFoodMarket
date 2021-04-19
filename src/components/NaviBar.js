import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

export const NaviBar = () => {
    return (

        <Navbar bg="primary" variant="dark" className="flexwrap">
            <Navbar.Brand >
                <Link to="/insert" style={{ color: "white" }}>Insert </Link>
            </Navbar.Brand>
            <Nav className="mr-auto flex justifyaround width70" >
                <Link to="/" style={{ color: "white" }}>Home</Link>
                <Link to="/rice" style={{ color: "white" }}>Rice</Link>
                <Link to="/lentils" style={{ color: "white" }}>Lentils/Beans</Link>
                <Link to="/oils" style={{ color: "white" }}>Oils/Ghee</Link>
                <Link to="/spice" style={{ color: "white" }}>Spices</Link>
                <Link to="/bread" style={{ color: "white" }}>Breads/Roti</Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>

    )
}
