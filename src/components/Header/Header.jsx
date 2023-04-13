import React, { Suspense } from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logoPicture from "./../../assets/img/logo_pdr_zbarazh_big.png"
import './Header.modules.css'

import './../../App.css'
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" className='navBarHeaderBg'>
                <Container>
                    <div className='containerLogoTitleFlex'>
                        <img
                            alt=""
                            src={logoPicture}
                            width="100"
                            // height="60"
                            className="d-inline-block align-top"
                        />{' '}

                        <div className='NavLogoTitle'>
                            PDR_Zbarazh
                        </div>
                    </div>
                    <Navbar.Brand href="/">
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={"mr-auto nav-Custom "}>
                            <Link to="/" className="mx-2">Головна</Link>
                            <Link to="/technology" className="mx-2">Про технологію</Link>
                            <Link to="/photoalbum" className="mx-2">Фото наших робіт</Link>
                            <Link to="/contact" className="mx-2">Контакти</Link>
                        </Nav>
                        {/*<Nav className={"mr-auto nav-Custom"}>*/}
                        {/*    <Nav.Link href="/">Головна</Nav.Link>*/}
                        {/*    <Nav.Link href="/technology">Про технологію</Nav.Link>*/}
                        {/*    <Nav.Link href="/photoalbum">Фото наших робіт</Nav.Link>*/}
                        {/*    <Nav.Link href="/contact">Контакти</Nav.Link>*/}
                        {/*</Nav>*/}
                        <PhoneNumber/>
                        {/*</Form>*/}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;