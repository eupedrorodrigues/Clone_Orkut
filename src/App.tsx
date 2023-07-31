import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/Profile/profilePage";
import ScreenLogin from './pages/Login/login';
import  Register from './pages/Register/Register';
import  FormRegister from './pages/FormRegister/FormRegister';
import  EditProfile from './pages/EditProfile/EditProfile';

type Props = {}

const App = (props: Props) => {
  return (
    <Router>
      <Routes>   
        <Route path="/" element={<ScreenLogin/>}/>  
        <Route path="/pages/Register" element={<Register/>}/>  
        <Route path="/pages/FormRegister" element={<FormRegister/>}/>  
        <Route path="/pages/Profile" element={<ProfilePage/>}/>  
        <Route path="/pages/EditProfile" element={<EditProfile/>}/>  
      </Routes>
  </Router>
  )
}

export default App