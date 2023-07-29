import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import ContentWrapper from "./components/content-wrapper/ContentWrapper";
import Information from "./components/information/Information";
import Network from "./components/network/Network";

type Props = {}

function Home({}: Props) {
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

export default Home;
