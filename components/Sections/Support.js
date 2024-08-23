import { gql } from '@apollo/client';
import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { useQuery } from '../client';

const GET_FAQ = gql`
query Faqs {
  faqs {
    data {
      attributes {
        answer
        question
      }
    }
  }
}`


const Support = (props) => {
	const faqs = useQuery(GET_FAQ)
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
							{faqs?.data?.faqs?.data.map((faq, index) => (
								<Accordion.Item eventKey={index} key={index}>
									<Accordion.Header as="h5">
										{faq.attributes.question}
									</Accordion.Header>
									<Accordion.Body>
										<p>
											{faq.attributes.answer}
										</p>
									</Accordion.Body>
								</Accordion.Item>
							))}
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