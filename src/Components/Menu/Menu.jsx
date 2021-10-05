import "./menu.scss";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="menu-content">
        <a href="#intro" onClick={() => setMenuOpen(false)}>
          intro
        </a>
        <a href="#work" onClick={() => setMenuOpen(false)}>
          work
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          contact
        </a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>
          portfolio
        </a>
        <a href="#testemoni" onClick={() => setMenuOpen(false)}>
          testemoni
        </a>
      </div>
    </div>
  );
}

export default Menu;
