import { Button } from "@mui/material";
import React from "react";
import Pdf from "../../Assets/Henok.pdf";
import Card from "../Card/Card";

import "./about.scss";
function About() {
  return (
    <div className="container">
      <div className="card-container" id="about">
        <div className="front">
          <h1>
            <span>About Me</span>
          </h1>
          <h2 className="h2">
            Hi, I'm Henok. A Software Engineer/React Developer with
            <span> 1+ years</span> of professional experience developing and
            maintaining web applications. I have a passion for front-end
            development. I specialize in<span> Javascript</span>,
            <span> React</span>
            Over the past year, I was fortunate enough to work with clients all
            around the world across different industries helping them build
            scalable apps. I pride myself on the quality of my work and my
            eagerness to learn. My goal is to create as many happy customers and
            learn as much from them in this ever-advancing field.
          </h2>
          <Button
            disable
            id="button"
            href={Pdf}
            download="Henok Egezew"
            variant="contained"
          >
            Download Cv
          </Button>
        </div>
        <div className="back">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default About;
