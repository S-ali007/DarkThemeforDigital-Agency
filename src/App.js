import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import "./App.css";
import ExploreOurPersonal from "./Components/ExploreOurPersonal";
import WeAreAwardWinning from "./Components/WeAreAwardWinning";
import GreatFeaturestoDo from "./Components/GreatFeaturestoDo";
import CheckOutOurRecentProject from "./Components/CheckOutOurRecentProject";

function App() {
  return (


    <div className="App mx-[auto] ">
      {/* Head */}
      <div className="bg-[url('/public/assets/hero-backgroung.svg')] ">
        <Header />
        <HeroSection />
      </div>
        
      <ExploreOurPersonal/>
      <WeAreAwardWinning/>
      <GreatFeaturestoDo/>
      <CheckOutOurRecentProject/>
      </div>
  );
}

export default App;
