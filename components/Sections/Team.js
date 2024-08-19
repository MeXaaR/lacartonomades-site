import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Team = () => {
	return (
		<section id="team">

			{/* <!-- Container --> */}
			<Container>

				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">

						<div className="section-title text-center">
							<h3>Qui sommes-nous ?</h3>
							<p>Nomades et indépendants depuis plusieurs années. Si vous nous croisez, n'hésitez pas à venir nous dire bonjour.</p>
						</div>

					</Col>
				</Row>

				<Row className="justify-content-center">

					{/* <!-- Member 2 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								<img src="/images/team/marie.jpeg" alt="" />

							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Marie-Aure</a></h5>
								<span className="position">Graphiste, Guide et Nomade</span>
							</div>
						</div>
					</Col>

					{/* <!-- Member 3 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								<img src="/images/team/francois.jpeg" alt="" />
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">François</a></h5>
								<span className="position">Web Dev et Dresseur de licorne</span>
							</div>
						</div>
					</Col>
				</Row>

			</Container>

		</section>
	);
}

export default Team;