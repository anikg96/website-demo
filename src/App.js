import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
    </div>
  );
}

export default App;
