import { Link } from "react-router-dom";
import "./styles/components.css";

function Header() {
  return (
    <div className="header">
      <header>
        <div></div>
        <div className="header-menu">
          <h1>Simple Food</h1>

          <div className="search-hamburger">
            <button>🔍</button>
            <button>🍔</button>
          </div>
        </div>
      </header>

      <nav>
        <ul>
          <li>
            <Link to="/home">ALL RECIPES</Link>
          </li>
          <li>
            {" "}
            <Link to="/">HOME</Link>
          </li>
          <li>
            {" "}
            <Link to="/salads">SALADS</Link>
          </li>
          <li>
            {" "}
            <Link to="/sweets">SWEET THINGS</Link>
          </li>
          <li>
            {" "}
            <Link to="/vegetables">VEGETABLES</Link>
          </li>
          <li>
            {" "}
            <Link to="/dinner">DINNER</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
