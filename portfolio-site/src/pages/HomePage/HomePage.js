import React from "react";
import Hero from "../../components/Hero";
import Carousel from "../../components/Carousel";

function HomePage(props) {
  return (
    <div>
      <Hero
        title={props.title}
        subtitle={props.subtitle}
        subtitle2={props.subtitle2}
        subtitle3={props.subtitle3}
        text={props.text}
      />

      <Carousel />
    </div>
  );
}

export default HomePage;
