import "../CSS/login.css";
import { useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    try {
      const logindata = { username, password };
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        logindata
      );
      alert("Login successfully");
      console.log("Login successfully", logindata);
      localStorage.setItem("token", response.data.result.token);
      localStorage.setItem("username", logindata.username);
      navigate("/profile");
    } catch (e) {
      alert("username or password wrong");
      console.error(e);
    }
  };

  return (
    <>
      <form className="login-form">
        <h1>Sign in</h1>
        <label htmlFor="text">Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button type="submit" className="log_in_button" onClick={handleSubmit}>
          Sign In
        </button>
        <p className="don_have_account">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </>
  );
}

export default Login;
