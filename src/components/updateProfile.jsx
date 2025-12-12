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
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [name, setName] = useState(localStorage.getItem("name"));
  const [dob, setDob] = useState(localStorage.getItem("Dob"));
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(
    localStorage.getItem("avatar")
  );
  const API_KEY = import.meta.env.VITE_API_KEY;
  const backSubmit = () => {
    navigate("/Profile");
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const updateProfileSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("dob", dob);
    formData.append("address", address);
    if (avatar) {
      formData.append("avatar", avatar);
    }
    try {
      const response = await axios.put(
        `${API_KEY}/users/${localStorage.getItem("username")}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Profile updated successfully");
    } catch (err) {
      console.error(err);
      if (err.response?.status === 400) {
        alert(err.response.data.message);
      }
      alert("username existed or you don't choose file");
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
          style={{ width: "500px", height: "750px" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="fw-bold m-0">Update Profile</h1>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={backSubmit}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              className="form-control input-bold"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={name}
              className="form-control input-bold"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Dob</label>
            <input
              type="date"
              value={dob}
              className="form-control input-bold"
              onChange={(e) => setDob(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              value={address}
              className="form-control input-bold"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Avatar</label>
            <input
              type="file"
              className="form-control input-bold"
              onChange={(e) => {
                const file = e.target.files[0];
                setAvatar(file);
                if (file) {
                  setAvatarPreview(URL.createObjectURL(file));
                }
              }}
            ></input>
          </div>
          <img
            src={avatarPreview}
            alt=""
            className="rounded-circle d-block mx-auto mb-3"
            style={{ width: "150px", height: "150px" }}
          />
          <button
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
