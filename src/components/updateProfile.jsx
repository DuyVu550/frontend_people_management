import "../CSS/updateProfile.css";
import mcImage from "../assets/Manchester_City.png";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function UpdateProfile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
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
      const res = await axios.put(
        `http://localhost:8080/users/${username}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
      <form className="update-profile-form">
        <div className="profile-header">
          <h1>Update Profile</h1>
          <button className="log-out-btn" onClick={handleLogout}>
            Log out
          </button>
        </div>
        <div>
          <label type="text">Username:</label>
          <input
            type="text"
            className="username-input"
            placeholder="vu123"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label type="text">Name:</label>
          <input
            type="text"
            className="name-input"
            placeholder="Nguyen Vu"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label type="text">Age:</label>
          <input
            type="text"
            className="birthday-input"
            placeholder="18"
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <div>
          <label type="text">Address:</label>
          <input
            type="text"
            className="address-input"
            placeholder="262/3 Luy Ban bich"
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>
        <div>
          <label type="text">Avatar Url:</label>
          <input
            type="file"
            className="avatar-input"
            placeholder="https://example.com/your-avatar.jpg"
            onChange={(e) => setAvatar(e.target.value)}
          ></input>
        </div>
        <img src={mcImage} alt="" className="avatar-image" />
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
export default UpdateProfile;
