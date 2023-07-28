import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/login'
import  Register from './pages/Register/Register'
import  FormRegister from './pages/FormRegister/FormRegister'
import  EditProfile from './pages/EditProfile/EditProfile'

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <FormRegister/> */}
      <EditProfile/>
    </div>
  );
}

export default App;
