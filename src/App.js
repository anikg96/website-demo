import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ResearchAreas from "./components/ResearchAreas";
import OurTeam from "./components/OurTeam";
import { News } from "./components/News";
import { ContactUs } from "./components/ContactUs";
import Footer from "./components/Footer";

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
      <News />
      <hr />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;
