import React, { useState, useRef } from "react";
import { useTransition, useSpring, useChain, config } from "react-spring";
import { Build } from "@material-ui/icons";
import { Container, Item } from "./styles";
import FadeIn from "react-fade-in";
import data from "./data";

let BodyHome = (props) => {
  const [open, set] = useState(false);
  const [showToolKit, setShowToolKit] = useState(true);
  const [showOpen, setShowOpen] = useState(false);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "10%", background: "#4DABF5" },
    to: { size: open ? "100%" : "10%", background: open ? "white" : "#4DABF5" },
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

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <>
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
        {showToolKit && (
          <div style={{ color: "white" }}>
            <FadeIn>
              <h4>Tool Kit</h4>
            </FadeIn>
          </div>
        )}

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
            <div style={{ transform: "translateY(1em)" }}>
              <img className="img-toolkit" src={item.img} />
              <h4 style={{ fontSize: "1.3em", color: "#505050" }}>
                {item.text}
              </h4>
            </div>
          </Item>
        ))}
      </Container>
    </>
  );
};
export default BodyHome;
