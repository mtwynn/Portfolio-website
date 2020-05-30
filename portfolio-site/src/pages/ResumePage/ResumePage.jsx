import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button, Link } from "@material-ui/core";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

let Resume = (props) => {
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
