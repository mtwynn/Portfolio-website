import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Avatar } from "@material-ui/core";

import "./App.css";

import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ResumePage from "./pages/ResumePage/ResumePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Tam Nguyen",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Projects", path: "/projects" },
        { title: "LinkedIn", path: "https://www.linkedin.com/in/mtam-nguyen/" },
        { title: "Resume", path: "/resume" },
        { title: "Github", path: "/" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Tam Nguyen",
        subtitle: "Software Engineering",
        subtitle2: "Web Development",
        subtitle3: "Mobile Apps",
        text: "Description",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's talk",
      },
      value: "recents",
    };
  }

  handleChange(event, newValue) {
    this.setState({
      value: newValue,
    });
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid>
          <Navbar className="border-bottom" expand="lg" sticky="top" bg="white">
            <Navbar.Brand href="/">
              <Avatar>TN</Avatar>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/">
                  Projects
                </Link>

                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/mtam-nguyen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  className="nav-link"
                  href="https://github.com/mtwynn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <Link className="nav-link" to="/resume">
                  Resume
                </Link>

                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            //component={HomePage}
            render={() => (
              <HomePage
                title={this.state.home.title}
                subtitle={this.state.home.subtitle}
                subtitle2={this.state.home.subtitle2}
                subtitle3={this.state.home.subtitle3}
                text={this.state.home.text}
              />
            )}
          ></Route>
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          ></Route>
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          ></Route>
          <Route path="/resume" render={() => <ResumePage />}></Route>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
