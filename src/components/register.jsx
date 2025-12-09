import { useState } from "react";
import "../CSS/register.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import axios from "axios";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("name", name);
    formData.append("age", age);
    formData.append("address", address);
    formData.append("avatar", avatar);
    try {
      const response = await axios.post(`${API_KEY}/users/register`, formData);
      if (response.data.message == "username existed") {
        alert("username existed");
        return;
      }
      alert("Sign in successfully");
      navigate("/profile");
    } catch (e) {
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
          style={{ width: "400px", height: "700px" }}
        >
          <h1 className="text-center mb-4">Sign up</h1>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control input-bold"
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control input-bold"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control input-bold"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              className="form-control input-bold"
              placeholder="Enter Age"
              onChange={(e) => setAge(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control input-bold"
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Avatar</label>
            <input
              type="file"
              className="form-control input-bold"
              onChange={(e) => setAvatar(e.target.files[0])}
              required
            ></input>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={handleSubmit}
          >
            Register
          </button>
          <p className="text-center my-2">
            Already have an account? <Link to="/">Sign in</Link>
          </p>
        </form>
      </div>
    </>
  );
}
export default Register;
