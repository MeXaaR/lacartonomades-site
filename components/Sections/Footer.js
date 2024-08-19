"use client"

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {

	componentDidMount() {
		if (typeof window !== 'undefined') {
			window.WOW = require('wowjs/dist/wow.js');
		}

		new WOW.WOW().init();
	}

	render() {
		return (
			<footer>

				{/* <!-- Widgets --> */}
				<div className="footer-widgets">
					<Container>

						<Row>

							{/* <!-- Footer logo --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									<p className="footer-logo">
										<img style={{ width: 200 }} src="/images/logo_one_two_lines_white.svg" alt="Lacartonomades" data-rjs="2" />
									</p>
									<p>
										Merci dêtre ici, et d'utiliser l'application. Ça nous touche beaucoup de voir que notre travail est utile.
									</p>
								</div>
							</Col>
							<Col className="col-12 col-md-6 col-lg-3 res-margin">

							</Col>

							{/* <!-- Useful links --> */}
							<Col className="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
								<div className="widget">

									<h6>Liens Utiles</h6>

									<ul className="footer-menu">
										<li><a href="/">Accueil</a></li>
										<li><a href="/support-us">Nous remercier</a></li>
										<li><a href="/mentions">Mentions Légales</a></li>
										<li><a href="/privacy">RGPD</a></li>
									</ul>

								</div>
							</Col>

							{/* <!-- Download --> */}
							<Col className="col-12 col-md-6 col-lg-3">
								<div className="widget">

									<h6>Télécharger</h6>

									<div className="button-store">
										<a href={process.env.PLAYSTORE_APP} className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 mb-sm-3"><i className="fab fa-google-play"></i><p>Disponible sur<span>Google Play</span></p></a>
										<a href={process.env.APPSTORE_APP} className="custom-btn d-inline-flex align-items-center m-2 m-sm-0"><i className="fab fa-apple"></i><p>Et aussi sur<span>App Store</span></p></a>
									</div>

								</div>
							</Col>

						</Row>

					</Container>
				</div>

				{/* <!-- Copyright --> */}
				<div className="footer-copyright">
					<Container>

						<Row>
							<Col className="col-12">

								{/* <!-- Text --> */}
								<p className="copyright text-center">
									Copyright © {new Date().getFullYear()} <a href="https://mexar.fr" target="_blank">MeXaR</a>. Tous droits réservés.
								</p>

							</Col>
						</Row>

					</Container>
				</div>

			</footer>
		);
	}

}