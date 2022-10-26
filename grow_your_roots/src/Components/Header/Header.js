import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <nav>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div>
          <Link to="/users">
            <button>View Your Plants</button>
          </Link>
        </div>
    </nav>
  </div>
);

export default Header;
