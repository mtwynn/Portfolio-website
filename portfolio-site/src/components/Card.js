import React from "react";

import CardInfo from "../components/CardInfo";

import { Paper, makeStyles } from "@material-ui/core";

import ReactCardFlip from "react-card-flip";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

let Card = (props) => {
  const [flipped, setFlipped] = React.useState(false);
  const classes = useStyles();

  return (
    <ReactCardFlip
      isFlipped={flipped}
      flipDirection="horizontal"
      infinite="true"
    >
      <div className={classes.root}>
        <Paper
          elevation={3}
          style={{ borderRadius: "10px" }}
          onMouseEnter={() => setFlipped(true)}
        >
          <img
            className="t-card-image"
            src={props.item.imgSrc}
            alt={props.item.imgSrc}
          ></img>
        </Paper>
      </div>

      <div className={classes.root}>
        <Paper
          elevation={3}
          style={{ borderRadius: "10px" }}
          onMouseLeave={() => setFlipped(false)}
        >
          This is a description
        </Paper>
      </div>
      {/*
      <div className="d-inline-block t-card" onClick={() => setFlipped(true)}>
        <img
          className="t-card-image"
          src={props.item.imgSrc}
          alt={props.item.imgSrc}
        ></img>
      </div>
      <div className="d-inline-block t-card">
        <CardInfo
          title={props.item.title}
          subtitle={props.item.subtitle}
          link={props.item.link}
        />
      </div>*/}
    </ReactCardFlip>
  );
};

export default Card;
