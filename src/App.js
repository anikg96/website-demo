import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ResearchAreas from "./components/ResearchAreas";
import OurTeam from "./components/OurTeam";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <hr />
      <ResearchAreas />
      <hr />
      <OurTeam />
      <hr />
    </div>
  );
}

export default App;
