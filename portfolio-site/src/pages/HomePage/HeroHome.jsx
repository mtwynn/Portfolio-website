import React from "react";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import Typist from "react-typist";
import "../../../node_modules/react-typist/dist/Typist.css";

import FadeIn from "react-fade-in";

let HeroHome = (props) => {
  return (
    <Jumbotron className="bg-transparent p-0" fluid style={{ height: "93vh" }}>
      <Container fluid>
        <Row className="justify-content-center pt-5">
          <Col md={8} sm={12}>
            <FadeIn transitionDuration="1000">
              {props.title && (
                <h1 className="display-1 font-weight-bolder">{props.title}</h1>
              )}
            </FadeIn>
            <FadeIn delay="800" transitionDuration="1000">
              <Typist className="h3 font-weight-light">
                {props.subtitle}
                <Typist.Backspace count={20} delay={1500} />
                {props.subtitle2}
                <Typist.Backspace count={13} delay={1500} />
                {props.subtitle3}
                <Typist.Backspace count={20} delay={1500} />
                {props.subtitle4}
              </Typist>
            </FadeIn>

            <FadeIn delay="900" transitionDuration="1000">
              <br />
              <Button
                style={{
                  fontWeight: "bold",
                  color: "#000",
                  textDecoration: "none",
                }}
                variant="contained"
                href="/projects"
              >
                Projects
                <ArrowForward />
              </Button>
            </FadeIn>
          </Col>
        </Row>
        <Row className="justify-content-right pt-5">
          <Col></Col>
          <Col md={4}>
            <Image
              width="60%"
              src="/resources/pro-pic.jpg"
              roundedCircle
              fluid
              style={{
                animation: "float 4s ease-in-out infinite",
              }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} sm={12}>
            <Image
              className="img-interest"
              src="/resources/coding-icon.png"
              style={{
                marginRight: "4%",
              }}
            />
            <Image
              className="img-interest"
              src="/resources/cycling-icon.png"
              fluid
              style={{
                marginRight: "4%",
              }}
            />
            <Image
              className="img-interest"
              src="/resources/dj-icon.png"
              fluid
              style={{
                marginRight: "4%",
              }}
            />
            <Image
              className="img-interest"
              src="/resources/piano-icon.png"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default HeroHome;
