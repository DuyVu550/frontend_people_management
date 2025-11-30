import "../CSS/register.css";
function Register() {
  return (
    <>
      <form className="register-form">
        <h1>Sign up</h1>
        <label htmlFor="text">Username</label>
        <input type="text" placeholder="Enter Username"></input>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Password"></input>
        <button type="submit">Register</button>
        <p className="already_have_account">
          Already have an account? <a href="./login">Sign in</a>
        </p>
      </form>
    </>
  );
}
export default Register;
