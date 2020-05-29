import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Typing from "react-typing-animation";

import FadeIn from "react-fade-in";

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            <FadeIn transitionDuration="700">
              {props.title && (
                <h1 className="display-1 font-weight-bolder">{props.title}</h1>
              )}
            </FadeIn>
            <Typing loop={true}>
              {props.subtitle && (
                <h3 className="display-4 font-weight-light">
                  {props.subtitle}
                </h3>
              )}
              <Typing.Backspace count={17} delay={500} />
            </Typing>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
