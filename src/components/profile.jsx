import "../CSS/Profile.css";
import mcImage from "../assets/Manchester_City.png";
function Profile() {
  return (
    <>
      <form className="profile-form">
        <div className="profile-header">
          <h1>Profile</h1>
          <button className="back-btn">Back</button>
        </div>
        <img src={mcImage} alt="" className="avatar-image" />
        <div>
          <label type="text">Username:</label>
          <span className="username-span">vu123</span>
        </div>
        <div>
          <label type="text">Name:</label>
          <span className="name-span">Nguyen Vu</span>
        </div>
        <div>
          <label type="text">BirthDay:</label>
          <span className="address-span">06/01/2004</span>
        </div>
        <div>
          <label type="text">Address:</label>
          <span className="address-span">262/3 Luy Ban bich</span>
        </div>
        <button type="submit" className="save-btn">
          Update profile
        </button>
      </form>
    </>
  );
}
export default Profile;
