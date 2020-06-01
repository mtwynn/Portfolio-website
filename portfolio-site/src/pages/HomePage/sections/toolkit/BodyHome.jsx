import React, { useState, useRef } from "react";
import { useTransition, useSpring, useChain, config } from "react-spring";
import { Image } from "react-bootstrap";
import { Tooltip } from "@material-ui/core";
import { Build } from "@material-ui/icons";
import { Container, Item } from "./styles";
import FadeIn from "react-fade-in";
import data from "./data";

let BodyHome = (props) => {
  const [open, set] = useState(false);
  const [showToolKit, setShowToolKit] = useState(true);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "10%", background: "#35baf6" },
    to: { size: open ? "100%" : "10%", background: open ? "white" : "#35baf6" },
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], (item) => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  let container = (
    <Container
      style={{
        ...rest,
        width: size,
        height: size,
        animation: "float 4s ease-in-out infinite",
      }}
      onClick={() => {
        set((open) => !open);
        if (open) {
          setTimeout(
            function () {
              setShowToolKit(true);
            },

            1000
          );
        } else {
          setShowToolKit(false);
        }
      }}
    >
      {transitions.map(({ item, key, props }) => (
        <Item
          key={key}
          style={{
            ...props,
            background: item.css,
            textAlign: "center",
            margin: "auto",
          }}
        >
          <div style={{ transform: "translateY(1.4em)" }}>
            <Image src={item.img} fluid></Image>
            <h4 style={{ fontSize: "1.3em", color: "#505050" }}>{item.text}</h4>
          </div>
        </Item>
      ))}
    </Container>
  );
  return (
    <>
      <Tooltip
        arrow
        title={
          showToolKit ? <span style={{ fontSize: "1.5em" }}>Tool Kit</span> : ""
        }
        placement="right-start"
      >
        {container}
      </Tooltip>
    </>
  );
};
export default BodyHome;
