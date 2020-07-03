import React, {Component} from 'react';
import logo from './logo192.png';
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink,} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import About from "../Pages/About";
import Blog from "../Pages/Blog";



export default class Header extends Component {
    render() {
        return (

            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href = "/">
                        <img
                        src={logo}
                        height={30}
                        width={30}
                        className="d-inline-block align-top"
                        alt={logo}
                        />
                        React site
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="responsive-navbar-nav"></NavbarToggle>
                    <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className = "mr-auto">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About as</NavLink>
                        <NavLink href="/contacts">Contacts</NavLink>
                        <NavLink href="/blog">Blog</NavLink>
                    </Nav>
                    </NavbarCollapse>
                    <Form inline>
                        <FormControl

                            />
                            <Button variant={"outline-info"}>Search</Button>
                    </Form>
                </Container>
            </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component ={Home}/>
                        <Route exact path="/about" component = {About}/>
                        <Route exact path="/contacts" component = {Contacts}/>
                        <Route exact path="/blog" component = {Blog}/>
                    </Switch>
                </Router>
            </>

        );
    }
}
