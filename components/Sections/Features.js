import React from "react";

import { Container, Row, Col } from 'react-bootstrap';
import features from "../../data/features.json";

const Features = ({ homeData }) => {

	return (
		<section id="features">

			{/* <!-- Container --> */}
			<Container>

				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">

						<div className="section-title text-center">
							<h3>{homeData?.features_title}</h3>
							<p>{homeData?.features_introduction}</p>
						</div>

					</Col>
				</Row>

				<Row className="d-flex align-items-center">

					{/* <!-- Left --> */}
					<Col className="col-12 col-md-6 col-lg-4">

						<ul className="features-item">
							{features.filter((f) => f.left).map((feature, index) => (
								<li key={Math.random()}>
									<div className="feature-box d-flex">

										{/* <!-- Box Text --> */}
										<div className="box-text align-self-center align-self-md-start">
											<h5 style={{ alignItems: "center" }} className="d-flex">
												<div className="box-icon">
													{feature.icon && <img src={feature.icon} alt="" />}
												</div>
												<span>{feature.title}</span>
											</h5>
											<p style={{ textAlign: "justify" }}>{feature.description}</p>
										</div>

									</div>
								</li>
							))}
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

							{features.filter((f) => !f.left).map((feature, index) => (
								<li key={Math.random()}>
									<div className="feature-box d-flex">
										{/* <!-- Box Text --> */}
										<div className="box-text align-self-center align-self-md-start">
											<h5 style={{ alignItems: "center" }} className="d-flex">
												<div className="box-icon">
													{feature.icon && <img src={feature.icon} alt="" />}
												</div>
												<span>{feature.title}</span>
											</h5>
											<p>{feature.description}</p>
										</div>

									</div>
								</li>
							))}
						</ul>
					</Col>

					{/* <!-- Center --> */}
					<Col className="col-12 d-lg-none">
						<div className="features-thumb text-center">
							<img style={{ width: "70%" }} src="/images/features/awesome-features.png" alt="" />
						</div>
					</Col>

				</Row>

			</Container>

		</section>
	);
}

export default Features;