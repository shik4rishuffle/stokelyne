import React, {Component} from "react";
import ChurchOutline from "../images/church_outline.png"
import {Carousel} from "react-bootstrap";
import {ArrowRightCircle, ArrowLeftCircle} from "react-bootstrap-icons";

class ImageCarousel extends Component {

  render() {
    return (
        <Carousel nextIcon={<ArrowRightCircle className="fs-1"/>} prevIcon={<ArrowLeftCircle className="fs-1"/>}>
          <Carousel.Item>
            <img
                className="d-block m-auto"
                src={ChurchOutline}
                alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
                className="d-block m-auto"
                src={ChurchOutline}
                alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
                className="d-block m-auto"
                src={ChurchOutline}
                alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
  }
}

export default ImageCarousel;
