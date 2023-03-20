import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from './scenes/Navbar';
import Home from './scenes/Home';
import DotGroup from './scenes/DotGroup';
import Skills from './scenes/Skills.jsx';
import Projects from './scenes/Projects.jsx';
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Home setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-5/6 mx-auto md:h-auto md:mb-10">
        <Skills />
      </div>
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
