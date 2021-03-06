import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Button, Link } from "@material-ui/core";
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
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid>
          <Row className="justify-content-center py-5">
            <Col md={8} sm={12}>
              <FadeIn transitionDuration="1000">
                {this.props.title && (
                  <h1 className="display-1 font-weight-bolder">
                    {this.props.title}
                  </h1>
                )}
                {this.props.subtitle && (
                  <FadeIn>
                    <Typist startDelay="500" className="h3 font-weight-light">
                      {this.props.subtitle}
                    </Typist>
                  </FadeIn>
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
