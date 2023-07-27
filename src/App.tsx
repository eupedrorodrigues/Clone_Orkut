import React from "react";

import Navbar from "./pages/Profile/components/navbar/Navbar";
import Profile from "./pages/Profile/components/profile/Profile";
import InfoWrapper from "./pages/Profile/components/info-wrapper/InfoWrapper";
import Information from "./pages/Profile/components/information/Information";

function App() {
  return (
    <>
     <Navbar/>
    <InfoWrapper>
     <Profile/>
     <Information/>
    </InfoWrapper>
    </>
  );
}

export default App;
