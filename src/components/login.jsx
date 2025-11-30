import "../CSS/login.css";
function Login() {
  return (
    <>
      <form className="login-form">
        <h1>Sign in</h1>
        <label htmlFor="text">Username</label>
        <input type="text" placeholder="Enter Username"></input>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Password"></input>
        <button type="submit" className="log_in_button">
          Sign In
        </button>
        <p className="don_have_account">
          Don't have an account? <a href="./register">Sign up</a>
        </p>
      </form>
    </>
  );
}
export default Login;
