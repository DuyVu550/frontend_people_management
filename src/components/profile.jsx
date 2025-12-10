import { useEffect, useState } from "react";
import "../CSS/Profile.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import axios from "axios";
function Profile() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const handelLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (!token) {
      navigate("/");
      return;
    }
    axios
      .get(`${API_KEY}/users/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.error(err));
  }, [navigate]);
  const updateProfileSubmit = () => {
    navigate("/updateProfile");
  };
  localStorage.setItem("Dob", user.dob);
  localStorage.setItem("address", user.address);
  localStorage.setItem("avatar", user.avatar);
  localStorage.setItem("name", user.name);
  localStorage.setItem("email", user.email);
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#A1D8F0" }}
      >
        <form
          className="container mt-100 p-4 rounded shadow bg-white"
          style={{ width: "400px", height: "500px" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="fw-bold m-0">Profile</h1>
            <button className="btn btn-danger" onClick={handelLogout}>
              Log out
            </button>
          </div>
          <img
            src={user.avatar}
            alt=""
            className="rounded-circle d-block mx-auto mb-3"
            style={{ width: "150px", height: "150px" }}
          />
          <div className="mb-2">
            <span className="fw-bold">Username: </span>
            <span>{user.username}</span>
          </div>
          <div className="mb-2">
            <span className="fw-bold">Name: </span>
            <span>{user.name}</span>
          </div>
          <div className="mb-2">
            <span className="fw-bold">Dob: </span>
            <span>{user.dob}</span>
          </div>
          <div className="mb-2">
            <span className="fw-bold">Email: </span>
            <span>{user.email}</span>
          </div>
          <div className="mb-2">
            <span className="fw-bold">Address: </span>
            <span>{user.address}</span>
          </div>
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
export default Profile;
