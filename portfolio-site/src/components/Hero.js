import React from "react";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import Typist from "react-typist";
import "../../node_modules/react-typist/dist/Typist.css";

import FadeIn from "react-fade-in";

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBtn: false,
    };
  }

  render() {
    return (
      <Jumbotron className="bg-transparent p-0" fluid>
        <Container fluid>
          <Row className="justify-content-center py-5">
            <Col md={8} sm={12}>
              <FadeIn transitionDuration="1000">
                {this.props.title && (
                  <h1 className="display-1 font-weight-bolder">
                    {this.props.title}
                  </h1>
                )}
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Hero;
