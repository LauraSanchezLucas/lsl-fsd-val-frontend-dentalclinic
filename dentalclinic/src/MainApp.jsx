import { Route, Routes } from "react-router-dom";
import { Footer1 } from "./components/footer/Footer1";
import { NavBar1 } from "./components/header/NavBar1";
import { AdminUsers } from "./layout/admin/AdminUsers";
import { Home } from "./layout/home/Home";
import { Login } from "./layout/login/Login";
import { Profile } from "./layout/profile/Profile";
import { Register } from "./layout/register/Register";
import { Treatments } from "./layout/treatment/Treatment";

import "./MainApp.css"

export const MainApp = () => {
  return (
    <div>
      <NavBar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatment" element={<Treatments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/useradmin" element={<AdminUsers />} />
      </Routes>
      <Footer1/>
    </div>
  );
};
