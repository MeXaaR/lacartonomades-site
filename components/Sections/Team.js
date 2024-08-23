import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Team = ({ data = {} }) => {
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
								<img src={data?.attributes?.marie_photo?.data?.attributes?.url} alt="" />

							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">Marie-Aure</a></h5>
								<span className="position">{data?.attributes?.marie_description}</span>
								<div className="button-store team wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
									<a href="https://marie-aure.com" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 me-sm-3">
										<i className="fa fa-camera"></i><p>Aller sur mon site</p>
									</a>
								</div>
							</div>
						</div>
					</Col>

					{/* <!-- Member 3 --> */}
					<Col className="col-12 col-md-6 col-lg-3">
						<div className="team-member res-margin">
							<div className="team-image">
								<img src={data?.attributes?.francois_photo?.data?.attributes?.url} alt="" />
							</div>
							<div className="team-details">
								<h5 className="title"><a href="/worker">François</a></h5>
								<span className="position">{data?.attributes?.francois_description}</span>
								<div className="button-store team wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
									<a href="https://francoisaubeut.com" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 me-sm-3">
										<i className="fa fa-code"></i><p>Aller sur mon site</p>
									</a>
								</div>
							</div>
						</div>
					</Col>
				</Row>

			</Container>

		</section>
	);
}

export default Team;