import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardDeck, Container} from "react-bootstrap";
import {CardTitle, CardText, CardImg, CardBody} from "react-bootstrap/Card";

class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox/>

            <Container>
                <h2 className="text-center m-4">Our Team</h2>
                <CardDeck className="m-4">
                    <Card bg="success" border="success">
                        <Card.Img
                        variant="top"
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                        <Card.Body>
                            <Card.Title>Developpers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Aliquam iste omnis similique.
                            </Card.Text>

                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card bg="warning" border={"warning"}>
                        <Card.Body>
                            <Card.Title>Developpers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Aliquam iste omnis similique.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                            <Card.Img
                                variant="botoom"
                                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />

                        </Card.Body>
                    </Card>
                    <Card bg="dark" border="dark">
                        <Card.Img
                            variant="top"
                            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                        <Card.Body>
                            <Card.Title>Developpers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Aliquam iste omnis similique.
                            </Card.Text>

                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>

            </>

        );
    }
}

export default Home;