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
  const API_KEY = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    try {
      const logindata = { username, password };
      const response = await axios.post(`${API_KEY}/auth/login`, logindata);
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
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#A1D8F0" }}
      >
        <form
          className="container mt-100 p-4 rounded shadow bg-white"
          style={{ width: "350px", height: "400px" }}
        >
          <h1 className="text-center mb-4">Sign in</h1>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <p className="text-center mt-3">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
