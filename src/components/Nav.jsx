import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Nav.css";
import { loggedInActionCreator } from "./redux/action";

const Nav = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector((storeData) => storeData);

  return (
    <div className="navContainer">
      <div className="nav-left">
        <h1>Logo</h1>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/input">Redux-Input</Link>
          </li>

          <li onClick={() => dispatch(loggedInActionCreator(false))}>
            <button>Logout</button>
          </li>
          <li style={{ color: "yellow" }}>{userName}</li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
