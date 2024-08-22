import React from 'react';
import Head from 'next/head';
// Add dynamic CSS
const addStyleSheet = (path) => {
	if (typeof window === 'object') {
		var head = document.head;
		var link = document.createElement("link");

		link.type = "text/css";
		link.rel = "stylesheet";
		link.href = path;

		head.appendChild(link);
	}
}

// Layout
const Layout = (props) => {

	// Google web font
	addStyleSheet("https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700");

	return (
		<div>

			<Head>

				/* Meta */
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="noindex,nofollow" />
				<meta rel="stylesheet" content="/css/styles.css" />


				/* Title */
				<title>{props.pageTitle}</title>

				/* Favicon */
				<link rel="icon" href="/images/favicon.png" type="image/x-icon" />

			</Head>

			{props.children}

		</div>
	);
}

export default Layout;
