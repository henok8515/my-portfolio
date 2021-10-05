import { useState } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Testemoni from "./Components/Testemoni/Testemoni";
import Contact from "./Components/Contact/Contact";
import Work from "./Components/Works/Work";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Menu from "./Components/Menu/Menu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        {" "}
        <Intro />
        <Portfolio />
        <Work />
        <Testemoni />
        <Contact />
      </div>
    </div>
  );
}

export default App;
