import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";


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
          <div>

          <h2>
            <span> Hey  I'M Henok</span>
          
          </h2>
          <h1>
            I MAKE THINGS FOR THE WEB.
          </h1>
          <h3>
            Technologies <span ref={textRef}></span>
            </h3>
            
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
