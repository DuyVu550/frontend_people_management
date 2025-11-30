import "../CSS/updateProfile.css";
import mcImage from "../assets/Manchester_City.png";
function UpdateProfile() {
  return (
    <>
      <form className="profile-form">
        <div className="profile-header">
          <h1>Update Profile</h1>
          <button className="back-btn">Back</button>
        </div>
        <div>
          <label type="text">Username:</label>
          <input
            type="text"
            className="username-input"
            placeholder="vu123"
          ></input>
        </div>
        <div>
          <label type="text">Name:</label>
          <input
            type="text"
            className="name-input"
            placeholder="Nguyen Vu"
          ></input>
        </div>
        <div>
          <label type="text">BirthDay:</label>
          <input
            type="text"
            className="birthday-input"
            placeholder="06/01/2004"
          ></input>
        </div>
        <div>
          <label type="text">Address:</label>
          <input
            type="text"
            className="address-input"
            placeholder="262/3 Luy Ban bich"
          ></input>
        </div>
        <div>
          <label type="text">Avatar Url:</label>
          <input
            type="text"
            className="avatar-input"
            placeholder="https://example.com/your-avatar.jpg"
          ></input>
        </div>
        <img src={mcImage} alt="" className="avatar-image" />
        <button type="submit" className="save-btn">
          Update profile
        </button>
      </form>
    </>
  );
}
export default UpdateProfile;
