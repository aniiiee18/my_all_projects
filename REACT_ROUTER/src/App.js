import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Componants/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Loginme from "./pages/Loginme";
import { useState } from "react";
import PrivateRoute from "./Componants/PrivateRoute";



function App() {

  const[isLogin, setisLoggedIn] = useState(false);

  return ( 
    <div className="w-[100vw] h-[100vh] bg-richblack-900 flex flex-col">
      <Navbar isLogin={isLogin} setisLoggedIn={setisLoggedIn}
      
      ></Navbar>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Loginme setisLoggedIn={setisLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setisLoggedIn={setisLoggedIn}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute  isLogin={isLogin}>
            <Dashboard/>
          </PrivateRoute>}/>

      </Routes>
    </div>
  )
}

export default App;
