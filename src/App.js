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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
