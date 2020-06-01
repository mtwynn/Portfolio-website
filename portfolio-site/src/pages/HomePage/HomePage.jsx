import React, { useRef } from "react";
import HeroHome from "./HeroHome";
import BodyHome from "./sections/toolkit/BodyHome";
import ProjectsHome from "./sections/projects/ProjectsHome";

let HomePage = (props) => {
  const fields = {
    title: "Tam Nguyen",
    subtitle: "Software Engineer",
    subtitle2: "Web Developer",
    subtitle3: "iOS Developer",
    subtitle4: "Check out my projects!",
  };

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <>
      <div>
        <HeroHome
          title={fields.title}
          subtitle={fields.subtitle}
          subtitle2={fields.subtitle2}
          subtitle3={fields.subtitle3}
          subtitle4={fields.subtitle4}
          scrollToProjects={executeScroll}
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
          backgroundImage: "url('resources/gears.png');",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
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
        <ProjectsHome refProp={myRef} />
      </div>
    </>
  );
};

export default HomePage;
