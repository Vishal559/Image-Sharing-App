import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import userImg from "../img/user.png";

const Navbar = ({ user }) => {
  console.log(user);
  return (
    <div className="navbar">
      <span className="logo">
        <img src={logo} />
      </span>
      <div style={{ display: "flex" }}>
        {user ? (
          <ul className="list">
            <li className="listItem" style={{ marginRight: "5px" }}>
              {" "}
              Hii Pratyush{" "}
            </li>
            <li className="listItem" style={{ marginRight: "15px" }}>
              <img src={userImg} alt="" className="avatar" />
            </li>
          </ul>
        ) : (
          <button className="signup">
            <Link className="link" to="/signup">
              Signup
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
