import Topbar from "./Components/Header/Topbar";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Works/Work";
import Testimonials from "./Components/Testemoni/Testemoni";
import Contact from "./Components/Contact/Contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./Components/Menu/Menu";
import About from "./Components/AboutME/About";
import styled from "styled-components";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const Container = styled.div`
    background-color: ${darkMode === true ? "white" : "black"};
    color: ${darkMode === true ? "black" : "white"};
  `;
  return (
    <Container>
      <Topbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact darkMode={darkMode} />
      </div>
    </Container>
  );
}

export default App;
