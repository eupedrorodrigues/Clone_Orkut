import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProfilePage from "./pages/Profile/profilePage";
import ScreenLogin from './pages/Login/login'
import  Register from './pages/Register/Register'
import  FormRegister from './pages/FormRegister/FormRegister'
import  EditProfile from './pages/EditProfile/EditProfile'

function App() {
  return (
    //<Routes>: indicates the routes
    //<Route>: indicates each specific route
    <Router>
      <Routes>   
       <Route path="/" element={<ScreenLogin/>}/>  
       <Route path="/profile" element={<ProfilePage/>}/>  
       <Route path="/register" element={<Register/>}/>  
       <Route path="/formRegister" element={<FormRegister/>}/>  
      </Routes>
    </Router>
  );
}

export default App;
