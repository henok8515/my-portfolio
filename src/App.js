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
import Footer from "./Components/Footer/Footer";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  let color = "#010203";
  const Container = styled.div`
    background-color: ${darkMode === true ? "#FDFCFC" : color};
    color: ${darkMode === true ? color : "#FDFCFC"};
  `;

  return (
    <Container onClick={() => setMenuOpen(false)}>
      <Topbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Menu darkMode={darkMode} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <hr />
        <About />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </Container>
  );
}

export default App;
