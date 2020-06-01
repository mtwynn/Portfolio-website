import React from "react";
import HeroHome from "./HeroHome";
import BodyHome from "./BodyHome";
import ProjectsHome from "./ProjectsHome";
import Carousel from "../../components/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Waypoint } from "react-waypoint";

let HomePage = (props) => {
  const fields = {
    title: "Tam Nguyen",
    subtitle: "Software Engineer",
    subtitle2: "Web Developer",
    subtitle3: "iOS Developer",
    subtitle4: "Check out my projects!",
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
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "93vh",
          width: "100vw",
          backgroundColor: "#e3e3e3",
        }}
      >
        <BodyHome />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "93vh",
          width: "100vw",
        }}
      >
        <ProjectsHome />
      </div>
    </>
  );
};

export default HomePage;
