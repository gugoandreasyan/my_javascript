import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import {CarouselItem} from "react-bootstrap";
import forestImg from '../assets/forest.jpeg'
import dforestImg from '../assets/dforest.jpeg'
import d1forestImg from '../assets/d1forest.jpeg'
import CarouselCaption from "react-bootstrap/CarouselCaption";

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <CarouselItem>
                    <img
                      className="d-block w-100"
                      src={forestImg}
                      alt="forest"
                    />
                    <CarouselCaption>
                        <h3>Forest Image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quo.</p>
                    </CarouselCaption>

                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={d1forestImg}
                        alt="d1forest"
                    />
                    <CarouselCaption>
                        <h3>Forest Image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quo.</p>
                    </CarouselCaption>

                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={dforestImg}
                        alt="dforest"
                    />
                    <CarouselCaption>
                        <h3>Forest Image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quo.</p>
                    </CarouselCaption>

                </CarouselItem>
            </Carousel>
        );
    }
}

export default CarouselBox;