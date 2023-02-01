import { GitHub, LinkedIn, Telegram } from "@mui/icons-material";
import React from "react";
import "./style.scss";

function footer({ darkMode }) {
  return (
    <div className={`${darkMode ? "footer" : "footer-dark"}`}>
      <p>© 2022</p>
      <p>Made with love</p>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/henok-egezew-0a460b208/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
        <a rel="noreferrer" target="_blank" href="https://github.com/henok8515">
          <GitHub />
        </a>
        <a rel="noreferrer" target="_blank" href="https://t.me/Matosxo">
          <Telegram />
        </a>
      </div>
    </div>
  );
}

export default footer;
