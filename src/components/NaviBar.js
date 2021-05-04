import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../home/header.css";



import 'bootstrap/dist/css/bootstrap.min.css';

export const NaviBar = () => {
    return (

        <Navbar bg="primary" expand="md" className="nvbar flexwrap">
            <Navbar.Brand href="/insert" style={{ color: "white" }}>Insert</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav "  >
                <Nav className="mr-auto nvbar flex justifyaround width60 textalign" >
                    <Link to="/" style={{ color: "white", padding: ".9%" }}>Home</Link>
                    <Link to="/rice" style={{ color: "white", padding: ".9%" }}>Rice</Link>
                    <Link to="/lentils" style={{ color: "white", padding: ".9%" }}>Lentils/Beans</Link>
                    <Link to="/oils" style={{ color: "white", padding: ".9%" }}>Oils/Ghee</Link>
                    <Link to="/spice" style={{ color: "white", padding: ".9%" }}>Spices</Link>
                    <Link to="/bread" style={{ color: "white", padding: ".9%" }}>Breads/Roti</Link>

                </Nav>

            </Navbar.Collapse>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light" style={{ color: "white" }}>Search</Button>
            </Form>
        </Navbar>


        // <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="">
        //     <Navbar.Brand >
        //         <Link to="/insert" style={{ color: "white" }}>Insert </Link>
        //     </Navbar.Brand>
        //     <Nav className="mr-auto flexwrap justifyaround width70" >
        //         <Nav.Link to="/" style={{ color: "white" }}>Home</Nav.Link>
        //         <Nav.Link to="/rice" style={{ color: "white" }}>Rice</Nav.Link>
        //         <Nav.Link to="/lentils" style={{ color: "white" }}>Lentils/Beans</Nav.Link>
        //         <Nav.Link to="/oils" style={{ color: "white" }}>Oils/Ghee</Nav.Link>
        //         <Nav.Link to="/spice" style={{ color: "white" }}>Spices</Nav.Link>
        //         <Nav.Link to="/bread" style={{ color: "white" }}>Breads/Roti</Nav.Link>
        //     </Nav>
        //     <Form inline>
        //         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        //         <Button variant="outline-light">Search</Button>
        //     </Form>
        // </Navbar>

    )
}
