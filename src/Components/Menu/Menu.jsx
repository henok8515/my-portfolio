import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen,darkMode }) {
  return (
    <div className={`${darkMode ? "menu " + (menuOpen && "active") : "menu-dark " + (menuOpen && "active")}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">about</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#work">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
