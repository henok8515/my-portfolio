import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Button } from "@mui/material";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Html", "Css", "JavaScript", "React", "Node-Js", "TypeScript", "TailWind", "MongoDb", "MySql"],
    });
  }, []);

  return (
          <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="asset/Man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2
            style={{
              fontSize: "120px",
            }}
          >
            <span>  I'M Henok</span>
          
          </h2>
          <h1
            style={{
              fontSize: "100px",
            }}
          >
            I MAKE THINGS FOR THE WEB.
          </h1>
          <h3>
            Technologies <span ref={textRef}></span>
          </h3>
          <Button style={{
            display:"flex",
            alignSelf:'start',
            marginTop:'20px',
            backgroundColor:"black"
       }} variant="contained" disableElevation>
  Download Cv
</Button>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
