import React from "react";
import Hero from "../../components/Hero";
import Content from "../../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={"About me"}></Hero>
      <Content>
        <p>Hello, my name is Tam.</p>
      </Content>
    </div>
  );
}

export default AboutPage;
