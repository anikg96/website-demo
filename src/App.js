import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ResearchAreas from "./components/ResearchAreas";
import OurTeam from "./components/OurTeam";
import Founders from "./components/Founders";
import { News } from "./components/News";
import { ContactUs } from "./components/ContactUs";
import Footer from "./components/Footer";
import Board from "./components/Board";
import Approach from "./components/Approach";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <hr />
      <Founders />
      <Board />
      <hr />
      <OurTeam />
      <hr />
      <Approach />
      <hr />
      <News />
      <hr />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;
