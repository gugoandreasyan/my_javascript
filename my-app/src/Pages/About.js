import React, {Component} from 'react';
import {Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane, Tab} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className = "flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Freamworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://www.strappinc.com/wp-content/uploads/2016/01/7_tendencias-800x470.jpg"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Animi architecto blanditiis consequuntur cupiditate ducimus eius,
                                        enim esse eveniet ex magni minima nesciunt, odio sed totam.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://www.uschamberfoundation.org/sites/default/files/styles/detail_image800w/public/man-people-space-desk%20800x470.jpg?itok=Ksarl-oZ"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Animi architecto blanditiis consequuntur cupiditate ducimus eius,
                                        enim esse eveniet ex magni minima nesciunt, odio sed totam.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://www.uschamberfoundation.org/sites/default/files/styles/detail_image800w/public/steam%20education%20microsoft%20800x470.jpg?itok=o91vSk5R"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Animi architecto blanditiis consequuntur cupiditate ducimus eius,
                                        enim esse eveniet ex magni minima nesciunt, odio sed totam.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://lingy.pro/wp-content/uploads/2019/03/aliexpress-dropshipping-800x470-1.png"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Animi architecto blanditiis consequuntur cupiditate ducimus eius,
                                        enim esse eveniet ex magni minima nesciunt, odio sed totam.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://www.uschamberfoundation.org/sites/default/files/styles/detail_image800w/public/InStrideCovidBlog-800x470.jpg?itok=qmdja9kx"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Animi architecto blanditiis consequuntur cupiditate ducimus eius,
                                        enim esse eveniet ex magni minima nesciunt, odio sed totam.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;