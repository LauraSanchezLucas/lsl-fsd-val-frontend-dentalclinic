import { Route, Routes } from "react-router-dom";
import { Home } from "./layout/Home";
import { Treatments } from "./layout/treatment/Treatment";



export const MainApp = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/treatments" element={<Treatments/>}/>
    </Routes>
    </>
  )
}
