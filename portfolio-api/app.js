const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sendGrid = require("@sendgrid/mail");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Content-Disposition", "attachment;filename=resume.pdf")
  next();
});

app.get("/api", (req, res, next) => {
  res.send("API Status: Running");
});

app.post("/api/email", (req, res, next) => {
  sendGrid.setApiKey(
    "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"
  );

  const msg = {
    to: "ngn.tam.m@gmail.com",
    from: req.body.email,
    subject: "Portfolio Website Contact",
    text: req.body.message,
  };

  sendGrid
    .send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(401).json({
        success: false,
      });
    });
});

app.get('/download', function(req, res){
  const file = `${__dirname}/resume.pdf`;
  res.download(file); // Set disposition and send it.
});

app.listen(8000, "0.0.0.0");
