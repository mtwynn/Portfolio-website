import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MailOutlineSharp, PhoneSharp } from "@material-ui/icons";

let Footer = (props) => {
  return (
    <footer className="mt-5">
      <Container fluid>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            <PhoneSharp color="#e3e3e3" />: (510)978-0228
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            <MailOutlineSharp />:{" "}
            <a
              href="mailto:ngn.tam.m@gmail.com"
              style={{ textDecoration: "none", color: "#35baf6" }}
            >
              {" "}
              ngn.tam.m@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
