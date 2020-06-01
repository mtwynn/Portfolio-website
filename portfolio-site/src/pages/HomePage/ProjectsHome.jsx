import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
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
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={{ span: 3, offset: 3 }} sm={12}>
          <Card
            style={{
              borderRadius: "3%",
              animation: mouseOver[0] ? "float 2s ease-in-out infinite" : "",
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
                <Typography gutterBottom variant="h5" component="h2">
                  KeyTrack
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Helps artists organize and manage a list of their Spotify
                  music, as well as help them search for and determine music
                  qualities such as tempo and key.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Tooltip title="Demo">
                <IconButton
                  href="https://key-track.netlify.app/"
                  target="_blank"
                >
                  <Visibility />
                </IconButton>
              </Tooltip>
              <Tooltip title="Code">
                <IconButton
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
              animation: mouseOver[1] ? "float 2s ease-in-out infinite" : "",
            }}
            onMouseEnter={() => setMouseOver([0, 1, 0, 0])}
            onMouseLeave={() => setMouseOver([0, 0, 0, 0])}
          >
            <CardActionArea>
              <CardMedia className={classes.media} image="" title="" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col>
          <Card
            className={classes.root}
            style={{
              borderRadius: "3%",
              animation: mouseOver[2] ? "float 2s ease-in-out infinite" : "",
            }}
            onMouseEnter={() => setMouseOver([0, 0, 1, 0])}
            onMouseLeave={() => setMouseOver([0, 0, 0, 0])}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image=""
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Col>
        <Col>
          <Card
            className={classes.root}
            style={{
              borderRadius: "3%",
              animation: mouseOver[3] ? "float 2s ease-in-out infinite" : "",
            }}
            onMouseEnter={() => setMouseOver([0, 0, 0, 1])}
            onMouseLeave={() => setMouseOver([0, 0, 0, 0])}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsHome;
