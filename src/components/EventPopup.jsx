import React from "react";
import {Link} from "gatsby";
import {Modal, Container, Row, Col, Image} from "react-bootstrap";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

export default function EventPopup(props) {
    console.log(props);
    const emailLink = `mailto: ${props.data.ContactEmail}`;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    {props.data.EventTitle}
                                </Modal.Title>
                            </Row>
                            <Row>
                                <div>{props.data.EventDate}</div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Modal.Header>
            <Modal.Body>
                <GatsbyImage image={getImage(props.data.EventPhoto?.localFile)}
                             objectFit="cover"
                             loading="lazy"
                             alt=""
                             className="event-popup-image"
                ></GatsbyImage>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <span>{props.data.Description}</span>
                            </Row>
                            <Row>
                                <span>Contact host: <a href={emailLink}
                                                       target='_blank'>{props.data.ContactEmail}</a></span>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>);
}
