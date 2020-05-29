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
              </FadeIn>
              <FadeIn delay="800" transitionDuration="1000">
                <Typist className="h3 font-weight-light">
                  Software Engineer
                  <Typist.Backspace count={20} delay={1500} />
                  Web Developer
                  <Typist.Backspace count={13} delay={1500} />
                  iOS Developer
                  <Typist.Backspace count={20} delay={1500} />
                  Checkout my projects below!
                </Typist>
              </FadeIn>

              <FadeIn delay="1500" transitionDuration="1000">
                <br />
                <Button
                  style={{
                    fontWeight: "bold",
                  }}
                  variant="contained"
                >
                  <Link
                    style={{ color: "#000", textDecoration: "none" }}
                    href="/resume"
                  >
                    Resume
                  </Link>
                  <ArrowForward />
                </Button>
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Hero;
