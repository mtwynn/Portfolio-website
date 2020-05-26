import React from "react";
import { Container, Row } from "react-bootstrap";

import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import tw from "../assets/tw.png";

import Card from "../components/Card";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 0,
          title: "Project 1",
          subtitle: "Subtitle 1",
          imgSrc: fb,
          link: "https://facebook.com",
          selected: false,
        },
        {
          id: 1,
          title: "Project 2",
          subtitle: "Subtitle 2",
          imgSrc: ig,
          link: "https://twitter.com",
          selected: false,
        },
        {
          id: 2,
          title: "Project 3",
          subtitle: "Subtitle",
          imgSrc: tw,
          link: "https://instagram.com",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
