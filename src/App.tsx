import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/login'
import  Register from './pages/Register/Register'
import  FormRegister from './pages/FormRegister/FormRegister'

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      <FormRegister/>
    </div>
  );
}

export default App;
