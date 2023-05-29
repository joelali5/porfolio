import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import Home from "./scenes/Home";
import Projects from "./scenes/Projects.jsx";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import About from "./scenes/About";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar isTopOfPage={isTopOfPage} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
