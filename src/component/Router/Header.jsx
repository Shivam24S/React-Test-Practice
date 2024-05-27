import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="product">Product</Link>
          </li>
          <li>
            <Link to="service">Service</Link>
          </li>
          <li>
            <Link to="help">Help</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
