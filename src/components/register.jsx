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
      const response = await axios.post(
        "http://localhost:8080/users/register",
        formData
      );
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
      <form className="register-form">
        <h1>Sign up</h1>
        <label htmlFor="text">Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <label htmlFor="text">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <label htmlFor="text">Age</label>
        <input
          type="text"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          required
        ></input>
        <label htmlFor="text">Address</label>
        <input
          type="text"
          placeholder="Enter Address"
          onChange={(e) => setAddress(e.target.value)}
          required
        ></input>
        <label htmlFor="text">Avatar</label>
        <input
          type="file"
          placeholder="Avatar"
          onChange={(e) => setAvatar(e.target.files[0])}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
        <p className="already_have_account">
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </form>
    </>
  );
}
export default Register;
