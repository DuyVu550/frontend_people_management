import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Register from "./components/register.jsx";
import Login from "./components/login.jsx";
import UpdateProfile from "./components/updateProfile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Register></Register> */}
    {/* <Login></Login> */}
    {/* <Profile></Profile> */}
    <UpdateProfile></UpdateProfile>
  </StrictMode>
);
