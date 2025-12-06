import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";
import UpdateProfile from "./components/updateProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/updateProfile" element={<UpdateProfile />} />
    </Routes>
  );
}
export default App;
