import React, {Component} from 'react';
import {Container, Media, Row, Col, MediaBody, ListGroup, ListGroupItem, Card} from "react-bootstrap";

class Blog extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="9">
                            <Media className="m-5">
                                <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                                />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
                                    dolorum ducimus error eum fuga fugit itaque
                                    laborum magni numquam qui, rem repellat
                                    repudiandae voluptatem! Aut et omnis porro reprehenderit sequi?
                                </p>
                            </Media.Body>
                            </Media>
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                                />
                                <Media.Body>
                                    <h5>Blog Post</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
                                        dolorum ducimus error eum fuga fugit itaque
                                        laborum magni numquam qui, rem repellat
                                        repudiandae voluptatem! Aut et omnis porro reprehenderit sequi?
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                                />
                                <Media.Body>
                                    <h5>Blog Post</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
                                        dolorum ducimus error eum fuga fugit itaque
                                        laborum magni numquam qui, rem repellat
                                        repudiandae voluptatem! Aut et omnis porro reprehenderit sequi?
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                                />
                                <Media.Body>
                                    <h5>Blog Post</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
                                        dolorum ducimus error eum fuga fugit itaque
                                        laborum magni numquam qui, rem repellat
                                        repudiandae voluptatem! Aut et omnis porro reprehenderit sequi?
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                                />
                                <Media.Body>
                                    <h5>Blog Post</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
                                        dolorum ducimus error eum fuga fugit itaque
                                        laborum magni numquam qui, rem repellat
                                        repudiandae voluptatem! Aut et omnis porro reprehenderit sequi?
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                                />
                                <Media.Body>
                                    <h5>Blog Post</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
                                        dolorum ducimus error eum fuga fugit itaque
                                        laborum magni numquam qui, rem repellat
                                        repudiandae voluptatem! Aut et omnis porro reprehenderit sequi?
                                    </p>
                                </Media.Body>
                            </Media>

                        </Col>
                        <Col md="3">
                            <h5 className="text-center mt-5">Categories</h5>
                            <Card>
                              <ListGroup variant="flush">
                                <ListGroupItem>Html/Css</ListGroupItem>
                                  <ListGroupItem>Javascript</ListGroupItem>
                                  <ListGroupItem>Python</ListGroupItem>
                                  <ListGroupItem>Java</ListGroupItem>
                                  <ListGroupItem>C++</ListGroupItem>
                              </ListGroup>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Blog;