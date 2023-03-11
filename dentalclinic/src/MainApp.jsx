import { Route, Routes } from "react-router-dom";
import { Home } from "./layout/Home";
import { Login } from "./layout/login/Login";
import { Treatments } from "./layout/treatment/Treatment";



export const MainApp = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/treatments" element={<Treatments/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}
