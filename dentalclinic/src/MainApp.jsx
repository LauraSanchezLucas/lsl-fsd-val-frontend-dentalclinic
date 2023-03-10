import { Route, Routes } from "react-router-dom"
import { NavBar1 } from "./components/NavBar"
import { Home } from "./layout/Home"



export const MainApp = () => {
  return (
    <>
    <NavBar1/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}
