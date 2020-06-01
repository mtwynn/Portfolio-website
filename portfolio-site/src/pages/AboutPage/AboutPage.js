import React from "react";
import Hero from "../../components/Hero";
import AboutContent from "../../components/AboutContent";
import FadeIn from "react-fade-in";
import Typist from "react-typist";

let AboutPage = (props) => {
  return (
    <div>
      <Hero title="About Me" subtitle="Hi, I'm Tam!"></Hero>

      <FadeIn transitionDuration="1000">
        <AboutContent>
          <h4>Background</h4>
          <p>
            I'm a current 4th year student at the University of California,
            Irvine, graduating in June 2020 with a B.S. in Computer Science and
            a minor in Informatics. I'll be starting a full-time position as a
            software engineer at Integrity Security Services, LLC that same
            month.
          </p>
          <p>
            I was born in Vietnam and am originally from the Bay Area. I found
            my passion for computers at an early age, but did not delve into
            coding until my senior year of high school. Since then, I have found
            that my niches include web, mobile, and game development.
          </p>
          <h4>Interests</h4>
          <p>
            Some of my interests include making music, whether that be playing
            the piano, producing, DJing, or singing. In the future, I'd want to
            combine this passion with programming to find work that incorporates
            both. Additionally, I enjoy cycling, photography, dancing, and
            cooking.
          </p>
          <h4>Fun Facts</h4>
          <ul>
            <li>I can play six different instruments</li>
            <li>I have been bitten by a snake</li>
            <li>I'm an only child</li>
          </ul>
        </AboutContent>
      </FadeIn>
    </div>
  );
};

export default AboutPage;
