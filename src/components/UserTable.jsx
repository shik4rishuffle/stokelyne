import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function UserTable(props) {
  console.log('hit');
  console.log(props);
  return (
  <Container>
    {
      props.data.edges.map(user => (
      <Row paddingTop="10px">
        <Col xs={12} md={2}>
          <GatsbyImage image={getImage(user.node?.DisplayPicture?.localFile)} objectFit="cover" loading="lazy" alt=""></GatsbyImage>
        </Col>
        <Col paddingTop="10px">
          <Row className="h4 capitalize">{user.node.name}</Row>
          <Row>{user.node.Description}</Row>
        </Col>
      </Row>
      ))
    }
  </Container>
  );
}
