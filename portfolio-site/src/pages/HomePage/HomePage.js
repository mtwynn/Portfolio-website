import React from "react";
import HeroHome from "../../components/HeroHome";
import Carousel from "../../components/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";

function HomePage(props) {
  return (
    <>
      <Container className="p-0" fluid>
        <Row fluid style={{ height: "100vh" }}>
          <Col>
            <HeroHome
              title={props.title}
              subtitle={props.subtitle}
              subtitle2={props.subtitle2}
              subtitle3={props.subtitle3}
              text={props.text}
            />
          </Col>
        </Row>
        <Row fluid style={{ backgroundColor: "#e3e3e3" }}>
          <Col>
            <Carousel />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
