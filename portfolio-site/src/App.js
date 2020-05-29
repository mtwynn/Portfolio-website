import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";

import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Tam Nguyen",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Tam Nguyen",
        subtitle: "Software Engineer",
        subtitle2: "DJ",
        subtitle3: "Student",
        text: "Description",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's talk",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand href="/">Tam Nguyen</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
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
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
