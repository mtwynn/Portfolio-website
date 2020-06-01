import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

let AboutContent = (props) => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={2}></Col>
        <Col md={4}>{props.children}</Col>
        <Col md={1}></Col>
        <Col>
          <Image rounded width="70%" fluid src="/resources/casual.jpg"></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutContent;
