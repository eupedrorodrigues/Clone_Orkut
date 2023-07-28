import React from "react";

import Navbar from "./pages/Profile/components/navbar/Navbar";
import Profile from "./pages/Profile/components/profile/Profile";
import ContentWrapper from "./pages/Profile/components/content-wrapper/ContentWrapper";
import Information from "./pages/Profile/components/information/Information";
import Network from "./pages/Profile/components/network/Network";

function App() {
  return (
    <>
     <Navbar/>
    <ContentWrapper>
     <Profile/>
     <Information/>
     <Network title="Amigos (248)" viewAll="Ver todos"/>
    </ContentWrapper>
    </>
  );
}

export default App;
