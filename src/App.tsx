import React from "react";

import Navbar from "./pages/Profile/components/navbar/Navbar";
import Profile from "./pages/Profile/components/profile/Profile";
import ContentWrapper from "./pages/Profile/components/content-wrapper/ContentWrapper";
import Information from "./pages/Profile/components/information/Information";
import Network from "./pages/Profile/components/network/Network";
import ScreenLogin from './pages/Login/login'
import  Register from './pages/Register/Register'
import  FormRegister from './pages/FormRegister/FormRegister'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
