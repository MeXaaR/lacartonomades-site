import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Support = (props) => {
	return (
		<section id="support" className={props.className}>

			{/* <!-- Container --> */}
			<Container>

				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">

						<div className="section-title text-center">
							<h3>Les questions fréquentes</h3>
							<p>Voici une petite explication supplémentaire du fonctionnement de la Carto'Nomades.</p>
						</div>

					</Col>
				</Row>

				<Row>
					<Col className="col-12 col-lg-10 offset-lg-1">

						{/* <!-- FAQ accordion --> */}
						<Accordion defaultActiveKey="0" flush>

							{/* <!-- Question 1 --> */}
							<Accordion.Item eventKey="0">

								<Accordion.Header as="h5">
									J'avais un compte sur l'ancienne version, comment je fais ?
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Pas desoucis, si tu avais créé un comtpe avec ton adresse email
										tu peux te connecter avec cette adresse. Il faut juste que tu cliques sur mot de passe oublié, tu recevra un email qui te permettra de mettre un nouveau
										mot de passe. Désolé pour le contretemps, mais nous avons changé de serveur et nous n'avons pas pu récupérer les mots de passe. C'est qu'ils étaient bien sécurisés hein!!
									</p>
								</Accordion.Body>

							</Accordion.Item>

							{/* <!-- Question 2 --> */}
							<Accordion.Item eventKey="1">

								<Accordion.Header as="h5">
									Et la version web, elle arrive quand ?
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Nous avons fait un choix. Afin de rester dans l'optique de l'application hors ligne, nous avons décidé de ne pas développer de version web.
										Ainsi, cahcun n'est plus dépendant du serveur, s'il plante, toutes les applicaitons de tout le monde continueront de fonctionner
										Le code est egalement plus facile a gérer s'il n'y a que les applcation mobiles
									</p>
								</Accordion.Body>

							</Accordion.Item>

							{/* <!-- Question 3 --> */}
							<Accordion.Item eventKey="2">

								<Accordion.Header as="h5">
									Vous ne revendez pas mes données ?
								</Accordion.Header>

								<Accordion.Body>
									<p>
										On ne revend pas tes données, on ne les partage pas non plus. On ne les utilise que pour améliorer l'application et pour savoir combien de personnes l'utilisent.
										Nous avons fait une délcaration RGPD car nous stockons vos emails sur le serveur pour créer les comptes, mais ils ne sont jamais revendus ou partagés.
									</p>
								</Accordion.Body>

							</Accordion.Item>

							{/* <!-- Question 4 --> */}
							<Accordion.Item eventKey="3">

								<Accordion.Header as="h5">
									Tu dis application gratuite mais y a quand même un paiement!!
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Oui mais pas vraiment. L'application est gratuite, mais nous avons mis en place un système de dons pour nous aider à payer les serveurs.
										Nous nous sommes dis que nous avions beaucoup travaillé sur ces applications, et que régulièrement nous aimons soutenir des projets comme celui-ci. Donc peut être que d'autres personnes
										aimeraient nous soutenir. Mais si tu n'as pas les moyens (ou l'envie), tu peux tout à fait continuer à utiliser l'application gratuitement, on t'y encourage d'ailleurs. Profite de cette gratuité. Les foncitonnalités sont exactement les mêmes.
									</p>
								</Accordion.Body>

							</Accordion.Item>

						</Accordion>

					</Col>
				</Row>

				<div className="empty-30"></div>

				<Row>
					<Col className="col-12">
						<p className="text-center mb-0">T'as d'autres questions? <a href="https://t.me/lacartonomades"><strong>Viens sur Telegram</strong></a></p>
					</Col>
				</Row>

			</Container>

		</section>
	);
}

export default Support;