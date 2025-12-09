import "../CSS/updateProfile.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function UpdateProfile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [name, setName] = useState(localStorage.getItem("name"));
  const [age, setAge] = useState(localStorage.getItem("age"));
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));
  const API_KEY = import.meta.env.VITE_API_KEY;
  const avatarUrl = import.meta.env.VITE_avatarUrl;
  const backSubmit = () => {
    navigate("/Profile");
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const updateProfileSubmit = async () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("username", username);
    formData.append("name", name);
    formData.append("age", age);
    formData.append("address", address);
    formData.append("avatar", avatar);
    try {
      const res = await axios.put(`${API_KEY}/users/${username}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Profile updated successfully");
      alert(res.data);
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
    navigate("/updateProfile");
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#A1D8F0" }}
      >
        <form
          className="container mt-100 p-4 rounded shadow bg-white"
          style={{ width: "500px", height: "750px" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="fw-bold m-0">Update Profile</h1>
            <button className="btn btn-secondary" onClick={backSubmit}>
              Back
            </button>
            <button className="btn btn-danger" onClick={handleLogout}>
              Log out
            </button>
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              value={username}
              className="form-control input-bold"
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={name}
              className="form-control input-bold"
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              value={age}
              className="form-control input-bold"
              onChange={(e) => setAge(e.target.value)}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              value={address}
              className="form-control input-bold"
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
          <img
            src={localStorage.getItem("avatar")}
            alt=""
            className="rounded-circle d-block mx-auto mb-3"
            style={{ width: "150px", height: "150px" }}
          />
          <button
            type="submit"
            className="btn btn-primary container-fluid"
            onClick={updateProfileSubmit}
          >
            Update profile
          </button>
        </form>
      </div>
    </>
  );
}
export default UpdateProfile;
