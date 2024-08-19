import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = (props) => {
	return (
		<section id="features" className={props.className}>

			{/* <!-- Container --> */}
			<Container>

				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">

						<div className="section-title text-center">
							<h3>Super rapide, super gratuit</h3>
							<p>D'autres applications vont vous faire payer des fonctionnalités essentielles pour la vie nomade. Là, c'est cadeau.</p>
						</div>

					</Col>
				</Row>

				<Row className="d-flex align-items-center">

					{/* <!-- Left --> */}
					<Col className="col-12 col-md-6 col-lg-4">

						<ul className="features-item">

							{/* <!-- Feature box --> */}
							<li>
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-server2"></div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>100% Hors ligne</h4>
										<p>Tous les lieux de la communauté sont stockés sur ton appareil, ca prend pas de place, et l'affichage est donc instantané, peu importe ton réseau.</p>
									</div>

								</div>
							</li>

							{/* <!-- Feature box --> */}
							<li>
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-eye"></div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Filtre ce que tu vois</h4>
										<p>Il peut y avoir beaucoup de lieux, beaucoup de choses différentes autour de toi. Tu cherches de l'eau ? N'affiche que ça et c'est réglé</p>
									</div>

								</div>
							</li>

							{/* <!-- Feature box --> */}
							<li>
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-heart"></div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Garde tes préférés</h4>
										<p>TU peux avoir des lieux favoris dans la vie. Un petit coeur et hop, super facile à retrouver.</p>
									</div>

								</div>
							</li>

							{/* <!-- Feature box --> */}
							<li>
								<div className="feature-box d-flex">

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-geolocalize-01"></div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Montre où tu es</h4>
										<p>T'as envie de croiser d'autres nomades de la communauté ? Indique ta présence sur un lieu, les autres pourront voir que tu es là et peut être venir prendre un thé avec toi.</p>
									</div>

								</div>
							</li>


						</ul>
					</Col>

					{/* <!-- Center --> */}
					<Col className="col-12 col-lg-4 d-none d-lg-block">
						<div className="features-thumb text-center">
							<img src="/images/features/awesome-features.png" alt="" />
						</div>
					</Col>

					{/* <!-- Right --> */}
					<Col className="col-12 col-md-6 col-lg-4">

						<ul className="features-item">

							{/* <!-- Feature box --> */}
							<li>
								<div className="feature-box d-flex">

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-cloud"></div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Mise à jour automatique</h4>
										<p>À chaque démarrage de l'application, si tu as du réseau, l'appli va aller chercher les mises à jour faites sur des lieux et mettre à jour ta base de données locale</p>
									</div>

								</div>
							</li>
							{/* <!-- Feature box --> */}
							<li>
								<div className={"feature-box d-flex" + (props.boxLeft ? " box-left" : "")}>

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-gear"></div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Customisable</h4>
										<p>T'as un téléphone de dingue ? Tu peux régler l'application pour qu'elle affiche plus de lieux et plus vite</p>
									</div>

								</div>
							</li>
							{/* <!-- Feature box --> */}
							<li>
								<div className="feature-box d-flex">

									{/* <!-- Box icon --> */}
									<div className="box-icon">
										<div className="icon icon-basic-star"></div>
									</div>

									{/* <!-- Box Text --> */}
									<div className="box-text align-self-center align-self-md-start">
										<h4>Petite communauté</h4>
										<p>L'appli est cachée et non référencée, ça fait donc de nous une petite communauté qui choisit ses membres. Et on entend bien que ca reste comme ca. Partage ce lien avec un nomade que tu connais.</p>
									</div>

								</div>
							</li>



						</ul>
					</Col>

				</Row>

			</Container>

		</section>
	);
}

export default Features;