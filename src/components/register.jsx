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
function CheckBirthdayYear(dob) {
  if (!dob) {
    return "Vui lòng nhập ngày tháng năm sinh";
  }
  const birthDate = new Date(dob);
  const today = new Date();
  if (birthDate >= today) {
    return "Ngày tháng năm sinh không vượt quá ngày hiện tại";
  }
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age < 18) {
    return "Bạn chưa đủ 18 tuổi";
  }
  return null;
}
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRepassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const birtDateMessage = CheckBirthdayYear(dob);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Mật khẩu phải có ít nhất 8 ký tự");
      return;
    }
    if (password !== rePassword) {
      alert("Password và Repassword không trùng!");
      return;
    }
    if (birtDateMessage) {
      alert(birtDateMessage);
      return;
    }
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("repassword", rePassword);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("dob", dob);
    formData.append("address", address);
    formData.append("avatar", avatar);
    try {
      const response = await axios.post(`${API_KEY}/users/register`, formData);
      alert("Sign in successfully");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("name", name);
      localStorage.setItem("dob", dob);
      localStorage.setItem("address", address);
      localStorage.setItem("avatar", avatar);
      navigate("/profile");
    } catch (e) {
      console.error(e);
      if (e.response.data.message == "username existed") {
        alert("username existed");
        return;
      }
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
          style={{ width: "400px", height: "880px" }}
          onSubmit={handleSubmit}
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
            <label className="form-label">RePassword</label>
            <input
              type="password"
              className="form-control input-bold"
              placeholder="Repassword"
              onChange={(e) => setRepassword(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control input-bold"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
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
            <label className="form-label">Dob</label>
            <input
              type="date"
              className="form-control input-bold"
              placeholder="Enter dob"
              onChange={(e) => setDob(e.target.value)}
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
            ></input>
          </div>
          <button type="submit" className="btn btn-primary w-100">
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
