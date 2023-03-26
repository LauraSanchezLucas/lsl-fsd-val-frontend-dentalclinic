import { Route, Routes } from "react-router-dom";
import { Footer1 } from "./components/footer/Footer1";
import { NavBar1 } from "./components/header/NavBar1";
import { AdminUsers } from "./layout/admin/AdminUsers";
import { DoctorAppointments } from "./layout/doctor/DoctorAppointments";
import { DoctorUser } from "./layout/doctor/DoctorUser";
import { Home } from "./layout/home/Home";
import { Login } from "./layout/login/Login";
import { Register } from "./layout/register/Register";
import { Treatments } from "./layout/treatment/Treatment";
import { BookAppointment } from "./layout/user/BookAppointment";
import { ProfileUser } from "./layout/user/ProfileUser";
import { SeeAppointment } from "./layout/user/SeeAppointment";
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
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/useradmin" element={<AdminUsers />} />
        <Route path="/userdoctor" element={<DoctorUser />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/seeappointment" element={<SeeAppointment />} />
        <Route path="/seedocappointment" element={<DoctorAppointments />} />
      </Routes>
      <Footer1/>
    </div>
  );
};
