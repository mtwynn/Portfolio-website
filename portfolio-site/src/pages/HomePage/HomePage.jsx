import React from "react";
import HeroHome from "./HeroHome";
import Carousel from "../../components/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";

let HomePage = (props) => {
  const fields = {
    title: "Tam Nguyen",
    subtitle: "Software Engineer",
    subtitle2: "Web Developer",
    subtitle3: "iOS Developer",
    subtitle4: "Check out my projects below!",
  };

  return (
    <>
      <div>
        <HeroHome
          title={fields.title}
          subtitle={fields.subtitle}
          subtitle2={fields.subtitle2}
          subtitle3={fields.subtitle3}
          subtitle4={fields.subtitle4}
        />
        <Carousel />
      </div>
    </>
  );
};

export default HomePage;
