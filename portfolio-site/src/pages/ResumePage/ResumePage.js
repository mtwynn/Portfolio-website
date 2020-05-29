import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button, Link } from "@material-ui/core";
import Axios from "axios";
import "./ResumePage.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

let Resume = (props) => {
  let handleDownload = () => {
    Axios.post("http://localhost:8000/download").then((response) => {
      console.log(response);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Document file="resources/resume.pdf">
        <Page pageNumber={1} scale={2} />
      </Document>
      <Button variant="contained" color="primary">
        <Link
          style={{ color: "#FFF", textDecoration: "none" }}
          target="_blank"
          href="https://drive.google.com/file/d/1pYAfcT1uJ45gKifKoJfYFe_h4ukxBsDd/view?usp=sharing"
        >
          Download
        </Link>
      </Button>
    </div>
  );
};

export default Resume;