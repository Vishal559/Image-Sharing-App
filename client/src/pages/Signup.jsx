import { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/v1/signup", {
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
        <div className="right">
          <form className="right" onSubmit={handleSubmit}>
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
            <button className="submit">Signup</button>
            {error && <span> Something Went wrong! </span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
