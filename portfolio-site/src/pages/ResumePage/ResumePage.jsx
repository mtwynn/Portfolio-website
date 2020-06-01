import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button, Link } from "@material-ui/core";
import FadeIn from "react-fade-in";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

let Resume = (props) => {
  return (
    <FadeIn delay="500" transitionDuration="1000">
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
        <Button variant="contained" style={{ backgroundColor: "#4DABF5" }}>
          <Link
            style={{
              color: "#FFF",

              textDecoration: "none",
            }}
            target="_blank"
            href="https://drive.google.com/file/d/1pYAfcT1uJ45gKifKoJfYFe_h4ukxBsDd/view?usp=sharing"
          >
            Download
          </Link>
        </Button>
      </div>
    </FadeIn>
  );
};

export default Resume;
