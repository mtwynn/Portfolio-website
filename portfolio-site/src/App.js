import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";

import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ResumePage from "./pages/ResumePage/ResumePage";

const useStyles = (theme) => ({
  title: {
    marginLeft: theme.spacing(2),
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Tam Nguyen",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "LinkedIn", path: "https://www.linkedin.com/in/mtam-nguyen/" },
        { title: "Resume", path: "/resume" },
        { title: "Github", path: "/" },
        { title: "Contact", path: "/contact" },
      ],
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <Container className="p-0" fluid>
          <Navbar
            className="border-bottom"
            expand="lg"
            sticky="top"
            bg="white"
            style={{
              height: "64px",
              boxShadow: "0 4px 5px 0px rgba(0, 0, 0, 0.14)",
            }}
          >
            <Navbar.Brand href="/" className={classes.title}>
              Tam Nguyen
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

          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />

          <Route path="/contact" component={ContactPage} />
          <Route path="/resume" component={ResumePage} />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default withStyles(useStyles)(App);
