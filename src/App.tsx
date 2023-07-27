import React from "react";

import Navbar from "./pages/Profile/components/navbar/Navbar";
import Profile from "./pages/Profile/components/profile/Profile";
import ContentWrapper from "./pages/Profile/components/content-wrapper/ContentWrapper";
import Information from "./pages/Profile/components/information/Information";

function App() {
  return (
    <>
     <Navbar/>
    <ContentWrapper>
     <Profile/>
     <Information/>
    </ContentWrapper>
    </>
  );
}

export default App;
