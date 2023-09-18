import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import "./App.css";
import ExploreOurPersonal from "./Components/ExploreOurPersonal";
import WeAreAwardWinning from "./Components/WeAreAwardWinning";
import GreatFeaturestoDo from "./Components/GreatFeaturestoDo";
import CheckOutOurRecentProject from "./Components/CheckOutOurRecentProject";
import ManagebussinessSeo from "./Components/ManagebussinessSeo";
import LetsSeeOurcompany from "./Components/LetsSeeOurcompany";
import PeopleSayAboutOurSupport from "./Components/PeopleSayAboutOurSupport";
import ReadytoWorktogether from "./Components/ReadytoWorktogether";
import Footer from "./Components/Footer";

function App() {

  
  return (


    <div className="App mx-[auto] ">
      {/* Head */}
      <div className="bg-[url('/public/assets/hero-backgroung.svg')] trigger  ">
        <Header />
        <HeroSection />
      </div>
      <ExploreOurPersonal/>
      <WeAreAwardWinning/>
      <GreatFeaturestoDo/>
      <CheckOutOurRecentProject/>
      <ManagebussinessSeo/>
      <LetsSeeOurcompany/>
      <PeopleSayAboutOurSupport/>
      <ReadytoWorktogether/>
      <Footer/>

      </div>
  );
}

export default App;
