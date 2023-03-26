import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import Home from "./scenes/Home";
import Skills from "./scenes/Skills.jsx";
import Projects from "./scenes/Projects.jsx";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
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
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Contact showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route
            path="/Home"
            element={
              <Home
                setSelectedPage={setSelectedPage}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            }
          />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="contact" element={<Contact showModal={showModal} setShowModal={setShowModal} />} /> */}
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
