import "./header.scss";

function Header({ menuOpen, setMenuOpen }) {
  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="wrapper">
        {" "}
        <div className="right">
          <a href="#intro" className="logo">
            portfolio
          </a>
        </div>
        <div className="left">
          <a className="a-tag" href="#intro">
            Intro
          </a>
          <a className="a-tag" href="#portfolio">
            port
          </a>
          <a className="a-tag" href="#work">
            work
          </a>
          <a className="a-tag" href="#contact">
            contact
          </a>
          <a className="a-tag" href="#testemoni">
            testemoni
          </a>
        </div>
        <div className="nav-bar" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
