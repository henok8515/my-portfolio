import "./intro.scss";
import { useEffect, useRef } from "react";
import { init } from "ityped";
function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["developer!", "Contet Creater"],
    });
  }, []);
  return (
    <div id="intro" className="intro">
      <div className="intro-left">
        <div className="img-container">
          <img src="asset/man.png" />
        </div>
      </div>
      <div className="intro-right">
        <div className="right-container">
          <h2>hello I'm</h2>
          <h1>Henok </h1>
          <h3>
            Freelancer <span ref={textRef}></span>
          </h3>
        </div>
        <a className="anchor-tag" href="#portfolio">
          <img className="arrow-img" src="asset/arrow.png" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
