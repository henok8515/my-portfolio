import "./PortfolioList.scss";

function PortfolioList({ title, id, setSelected, active }) {
  return (
    <ul>
      <li
        className={active ? "portfolio-wrapper active" : "portfolio-wrapper"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </ul>
  );
}

export default PortfolioList;
