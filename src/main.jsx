import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Profile from "./components/profile.jsx";
import Register from "./components/register.jsx";
import Login from "./components/login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Register></Register> */}
    {/* <Login></Login> */}
    <Profile></Profile>
  </StrictMode>
);
