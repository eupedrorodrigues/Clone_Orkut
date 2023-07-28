import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScreenLogin from './pages/Login/Login'
import Login from './pages/Login/login'
import  Register from './pages/Register/Register'
import  FormRegister from './pages/FormRegister/FormRegister'

function App() {
  return (
    <div className="App">
      {/*<ScreenLogin /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <FormRegister/>
    </div>
  );
}

export default App;
