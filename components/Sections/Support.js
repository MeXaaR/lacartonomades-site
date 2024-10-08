import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import faqs from '../../data/support.json';

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
					{faqs.map((faq, index) => (
						<Col className="col-12 col-lg-10 offset-lg-1" key={index}>
							<h5>
								{faq.question}
							</h5>
							<p style={{ textAlign: 'justify' }}>
								{faq.answer}
							</p>
						</Col>

					))}

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