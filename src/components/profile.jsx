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
  const backSubmit = () => {
    navigate("/updateProfile");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (!token) {
      navigate("/");
      return;
    }
    axios
      .get(`http://localhost:8080/users/${username}`, {
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
  return (
    <>
      <form className="profile-form">
        <div className="profile-header">
          <h1>Profile</h1>
          <button className="back-btn" onClick={backSubmit}>
            Back
          </button>
        </div>
        <img src={user.avatar} alt="" className="avatar-image" />
        <div>
          <label type="text">Username</label>
          <span className="username-span">{user.username}</span>
        </div>
        <div>
          <label type="text">Name:</label>
          <span className="name-span">{user.name}</span>
        </div>
        <div>
          <label type="text">Age:</label>
          <span className="address-span">{user.age}</span>
        </div>
        <div>
          <label type="text">Address:</label>
          <span className="address-span">{user.address}</span>
        </div>
        <button
          type="submit"
          className="save-btn"
          onClick={updateProfileSubmit}
        >
          Update profile
        </button>
      </form>
    </>
  );
}
export default Profile;
