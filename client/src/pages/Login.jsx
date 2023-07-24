import Google from "../img/google.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/v1/login", {
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Login with google
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div form className="right">
          <form className="right">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit" onSubmit={handleSubmit}>
              Login
            </button>
            {error && <span> Something Went wrong! </span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
