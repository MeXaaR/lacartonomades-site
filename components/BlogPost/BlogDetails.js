import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Markdown from 'react-markdown'
import Brocoli from '../Brocoli';

const BlogDetails = ({ content }) => {
    return (
        <Col className="col-12 col-lg-12 res-margin">

            {/* <!-- Article --> */}
            <article className="row blog-post">

                <Col className="col-12">
                    <Markdown>{content}</Markdown>
                </Col>
            </article>

        </Col>
    );
}

export default BlogDetails;