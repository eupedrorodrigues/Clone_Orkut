import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Profile/Home";
import ScreenLogin from './pages/Login/login'
import  Register from './pages/Register/Register'
import  FormRegister from './pages/FormRegister/FormRegister'

function App() {
  return (
    //<Routes>: indicates the routes
    //<Route>: indicates each specific route
    <Router>
      <Routes>   
       <Route path="/" element={<ScreenLogin/>}/>  
       <Route path="/home" element={<Home/>}/>  
       <Route path="/register" element={<Register/>}/>  
       <Route path="/formRegister" element={<FormRegister/>}/>  
      </Routes>
    </Router>
  );
}

export default App;
