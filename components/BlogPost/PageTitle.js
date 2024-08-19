import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PageTitle = ({ title = 'Pas de titre', tag = "Des trucs sérieux", subtitle = "on les a faites nous même" }) => {
	const parallax = useRef(null);

	useEffect(() => {
		if (parallax.current) {
			parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
		}
	}, [parallax]);

	return (
		<section className="page-title valign parallax" data-image="/images/banner/landscape.svg" ref={parallax}>

			{/* <!-- Overlay --> */}
			<div className="overlay"></div>

			{/* <!-- Container --> */}
			<Container>
				<Row>
					<Col className="col-12 text-center">

						{/* <!-- Category --> */}
						<div className="blog-category">
							<a href="/blog">{tag}</a>
						</div>

						{/* <!-- Title --> */}
						<h1 className="blog-title">{title}</h1>

						{/* <!-- Date --> */}
						<div className="blog-date">
							{subtitle}
						</div>

					</Col>
				</Row>
			</Container>

		</section>
	);
};

export default PageTitle;
