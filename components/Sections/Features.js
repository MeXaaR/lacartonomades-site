import React, { useState, useEffect } from "react";
import { gql } from '@apollo/client';

import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from "../client";

const GET_FEATURES = gql`
query GetFeatures {
  features {
    data {
      attributes {
        title
        description
        left
        icon {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}`



const Features = ({ homeData }) => {
	const features = useQuery(GET_FEATURES)

	return (
		<section id="features">

			{/* <!-- Container --> */}
			<Container>

				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">

						<div className="section-title text-center">
							<h3>{homeData?.attributes?.features_title}</h3>
							<p>{homeData?.attributes?.features_introduction}</p>
						</div>

					</Col>
				</Row>

				<Row className="d-flex align-items-center">

					{/* <!-- Left --> */}
					<Col className="col-12 col-md-6 col-lg-4">

						<ul className="features-item">
							{features?.data?.features?.data.filter((f) => f.attributes.left).map((feature, index) => (
								<li key={Math.random()}>
									<div className="feature-box d-flex">

										{/* <!-- Box Text --> */}
										<div className="box-text align-self-center align-self-md-start">
											<h5 style={{ alignItems: "center" }} className="d-flex">
												<div className="box-icon">
													{feature.attributes.icon && <img src={feature.attributes.icon.data.attributes.url} alt="" />}
												</div>
												<span>{feature.attributes.title}</span>
											</h5>
											<p style={{ textAlign: "justify" }}>{feature.attributes.description}</p>
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

							{features?.data?.features?.data.filter((f) => !f.attributes.left).map((feature, index) => (
								<li key={Math.random()}>
									<div className="feature-box d-flex">
										{/* <!-- Box Text --> */}
										<div className="box-text align-self-center align-self-md-start">
											<h5 style={{ alignItems: "center" }} className="d-flex">
												<div className="box-icon">
													{feature.attributes.icon && <img src={feature.attributes.icon.data.attributes.url} alt="" />}
												</div>
												<span>{feature.attributes.title}</span>
											</h5>
											<p>{feature.attributes.description}</p>
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