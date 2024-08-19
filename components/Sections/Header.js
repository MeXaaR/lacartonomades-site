"use client"
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const Header = (props) => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const handleMobileMenu = e => {
        e.preventDefault();
        return setIsMobileMenu(!isMobileMenu);
    };

    return (
        <header id="top-page" className="header" style={{ background: props.background }}>
            <div id="mainNav" className={isMobileMenu ? 'main-menu-area animated mobile-menu-open' : 'main-menu-area animated'}>
                <Container>
                    <Row className="align-items-center">

                        <Col className="col-12 col-lg-2 d-flex justify-content-between align-items-center">

                            {/* <!-- Logo --> */}
                            <div className="logo">

                                <Link href="/" className="navbar-brand navbar-brand1">
                                    <img style={{ maxWidth: 200 }} src="/images/logo_one_two_lines_white.svg" srcSet={`/images/logo_one_two_lines_white.svg 2x`} alt="La Carto'Nomades" />
                                </Link>

                                <Link href="/" className="navbar-brand navbar-brand2">
                                    <img style={{ maxWidth: 200 }} src="/images/logo_one_two_lines.svg" srcSet={`/images/logo_one_two_lines.svg 2x`} alt="La Carto'Nomades" />
                                </Link>

                            </div>

                            {/* <!-- Burger menu --> */}
                            <div className="menu-bar d-lg-none" role="button" tabIndex={0} onKeyPress={() => { }} onClick={handleMobileMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                        </Col>

                        <div className="op-mobile-menu col-lg-10 p-0 d-lg-flex align-items-center justify-content-end" role="button" tabIndex={0} onKeyPress={() => { }} onClick={handleMobileMenu}>

                            {/* <!-- Mobile menu --> */}
                            <div className="m-menu-header d-flex justify-content-between align-items-center d-lg-none">

                                {/* <!-- Logo --> */}
                                <a href="#" className="logo">
                                    <img style={{ maxWidth: 200 }} src="/images/logo_one_two_lines.svg" srcSet={`/images/logo_one_two_lines.svg 2x`} alt="La Carto'Nomades" />
                                </a>

                                {/* <!-- Close button --> */}
                                <span className="close-button" role="button" tabIndex={0} onKeyPress={() => { }} onClick={handleMobileMenu}></span>

                            </div>

                            {/* <!-- Items --> */}
                            <ul className="nav-menu d-lg-flex flex-wrap list-unstyled justify-content-center">

                                <li className="nav-item">
                                    <Link href="/#top-page" className={props.nav !== undefined && props.nav === "home" ? 'nav-link js-scroll-trigger active' : 'nav-link js-scroll-trigger'}>
                                        <span>Accueil</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#features" className="nav-link js-scroll-trigger">
                                        <span>Fonctions</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#counters" className="nav-link js-scroll-trigger">
                                        <span>En chiffres</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#team" className="nav-link js-scroll-trigger">
                                        <span>Team</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#support" className="nav-link js-scroll-trigger">
                                        <span>Questions</span>
                                    </Link>
                                </li>

                            </ul>

                        </div>

                    </Row>
                </Container>
            </div>
        </header>

    );
}

export default Header;