import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { Visibility, Code } from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Chip from "@material-ui/core/Chip";

import { Person, People } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "80%",
  },
  media: {
    height: "10em",
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  actionButton: {
    "&:hover": {
      color: "#35baf6",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let ProjectsHome = (props) => {
  const classes = useStyles();
  const [mouseOver, setMouseOver] = React.useState([0, 0, 0, 0]);
  const [open, setOpen] = React.useState([0, 0, 0, 0]);

  return (
    <div ref={props.refProp}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={{ span: 3, offset: 3 }} sm={12}>
            <Card
              className={classes.root}
              style={{
                borderRadius: "3%",
                animation: mouseOver[0] ? "float 3s ease-in-out infinite" : "",
              }}
              onMouseEnter={() => setMouseOver([1, 0, 0, 0])}
              onMouseLeave={() => setMouseOver([0, 0, 0, 0])}
            >
              <CardActionArea onClick={() => setOpen([1, 0, 0, 0])}>
                <CardMedia
                  className={classes.media}
                  image="/resources/keytrack-pic.png"
                  title="KeyTrack"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    KeyTrack
                    <Chip
                      label="Solo"
                      avatar={
                        <Avatar>
                          <Person />
                        </Avatar>
                      }
                    />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Helps artists organize and manage a list of their Spotify
                    music, as well as help them search for and determine music
                    qualities such as tempo and key.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Tooltip title="Demo">
                  <IconButton
                    className={classes.actionButton}
                    href="https://key-track.netlify.app/"
                    target="_blank"
                  >
                    <Visibility />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Code">
                  <IconButton
                    className={classes.actionButton}
                    href="https://github.com/mtwynn/KeyTrack-web"
                    target="_blank"
                  >
                    <Code />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
            <Dialog
              fullScreen
              open={open[0]}
              onClose={() => setOpen([0, 0, 0, 0])}
              TransitionComponent={Transition}
            >
              <AppBar
                className={classes.appBar}
                style={{ backgroundColor: "#1DB954" }}
              >
                <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                    KeyTrack
                  </Typography>
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={() => setOpen([0, 0, 0, 0])}
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
            </Dialog>
          </Col>
          <Col md={{ span: 3, offset: 3 }} sm={12}>
            <Card
              className={classes.root}
              style={{
                borderRadius: "3%",
                animation: mouseOver[1] ? "float 3s ease-in-out infinite" : "",
              }}
              onMouseEnter={() => setMouseOver([0, 1, 0, 0])}
              onMouseLeave={() => setMouseOver([0, 0, 0, 0])}
            >
              <CardActionArea onClick={() => setOpen([0, 1, 0, 0])}>
                <CardMedia
                  className={classes.media}
                  image="resources/smartres-pic.png"
                  title="SmartRES"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    SmartRES
                    <Chip
                      label="Team"
                      avatar={
                        <Avatar>
                          <People />
                        </Avatar>
                      }
                    />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    An IoT solution for real estate agents to replace
                    traditional painted real estate signs with wireless, digital
                    signs.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Tooltip title="Demo (on Github)">
                  <IconButton
                    className={classes.actionButton}
                    href="https://github.com/mtwynn/SmartRES"
                    target="_blank"
                  >
                    <Visibility />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Code">
                  <IconButton
                    className={classes.actionButton}
                    href="https://github.com/mtwynn/SmartRES"
                    target="_blank"
                  >
                    <Code />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
            <Dialog
              fullScreen
              open={open[1]}
              onClose={() => setOpen([0, 0, 0, 0])}
              TransitionComponent={Transition}
            >
              <AppBar
                className={classes.appBar}
                style={{ backgroundColor: "#86E005" }}
              >
                <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                    SmartRES
                  </Typography>
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={() => setOpen([0, 0, 0, 0])}
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
            </Dialog>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col md={{ span: 3 }}>
            <Card
              className={classes.root}
              style={{
                borderRadius: "3%",
                animation: mouseOver[2] ? "float 3s ease-in-out infinite" : "",
              }}
              onMouseEnter={() => setMouseOver([0, 0, 1, 0])}
              onMouseLeave={() => setMouseOver([0, 0, 0, 0])}
            >
              <CardActionArea onClick={() => setOpen([0, 0, 1, 0])}>
                <CardMedia
                  className={classes.media}
                  image="resources/smartcycle-pic.png"
                  title="SmartCycle"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    SmartCycle
                    <Chip
                      label="Team"
                      avatar={
                        <Avatar>
                          <People />
                        </Avatar>
                      }
                    />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    An IoT "smart" trashcan that is capable of sorting and
                    distinguishing between mixed recycling and landfill
                    products.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Tooltip title="Demo">
                  <IconButton
                    className={classes.actionButton}
                    href="https://github.com/mtwynn/SmartRES"
                    target="_blank"
                  >
                    <Visibility />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Code">
                  <IconButton
                    className={classes.actionButton}
                    href="https://github.com/mtwynn/SmartCycle"
                    target="_blank"
                  >
                    <Code />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
            <Dialog
              fullScreen
              open={open[2]}
              onClose={() => setOpen([0, 0, 0, 0])}
              TransitionComponent={Transition}
            >
              <AppBar
                className={classes.appBar}
                style={{ backgroundColor: "#548DD1" }}
              >
                <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                    SmartCycle
                  </Typography>
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={() => setOpen([0, 0, 0, 0])}
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
            </Dialog>
          </Col>
          <Col md={{ span: 3, offset: 3 }}>
            <Card
              className={classes.root}
              style={{
                borderRadius: "3%",
                animation: mouseOver[3] ? "float 3s ease-in-out infinite" : "",
              }}
              onMouseEnter={() => setMouseOver([0, 0, 0, 1])}
              onMouseLeave={() => setMouseOver([0, 0, 0, 0])}
            >
              <CardActionArea onClick={() => setOpen([0, 0, 0, 1])}>
                <CardMedia
                  className={classes.media}
                  image="/resources/augma-pic.png"
                  title="AugmaAR"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    AugmaAR
                    <Chip
                      label="Team"
                      avatar={
                        <Avatar>
                          <People />
                        </Avatar>
                      }
                    />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    An artwork marketplace where users can preview a picture or
                    painting on their own wall using AR.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Tooltip title="Demo (on Github)">
                  <IconButton
                    className={classes.actionButton}
                    href="https://github.com/mtwynn/AugmaAR"
                    target="_blank"
                  >
                    <Visibility />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Code">
                  <IconButton
                    className={classes.actionButton}
                    href="https://github.com/mtwynn/AugmaAR"
                    target="_blank"
                  >
                    <Code />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
            <Dialog
              fullScreen
              open={open[3]}
              onClose={() => setOpen([0, 0, 0, 0])}
              TransitionComponent={Transition}
            >
              <AppBar
                className={classes.appBar}
                style={{ backgroundColor: "#FC4639" }}
              >
                <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                    AugmaAR
                  </Typography>
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={() => setOpen([0, 0, 0, 0])}
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
            </Dialog>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsHome;
