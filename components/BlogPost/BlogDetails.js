import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Markdown from 'react-markdown'

const BlogDetails = ({ content }) => {
    return (
        <Col className="col-12 col-lg-12 res-margin">

            {/* <!-- Article --> */}
            <article className="row blog-post">

                <Col className="col-12">
                    <Markdown>{content}</Markdown>
                </Col>
            </article>

            {/* <!-- Prev/Next posts --> */}
            <div className="post-navigation-wrapper">

                <Row className="divider">
                    <Col className="col-12">
                    </Col>
                </Row>

            </div>

        </Col>
    );
}

export default BlogDetails;