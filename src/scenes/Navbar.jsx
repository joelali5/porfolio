import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar({ isTopOfPage }) {
  const navbarVariant = {
    hidden: {
      opacity: 0,
      y: -250,
    },
    visible: {
      opacity: 1,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 120,
        duration: 1,
        originY: 0,
      },
    },
  };

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 780px)");
  const navbarBackground = isTopOfPage ? "" : "bg-black";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6 mt-0 `}>
      <div className="flex items-center justify-between mx-auto w-5/6 md:w-2/3 lg:w-1/2">
        <motion.h4
          className="font-playfair text-2xl font-bold"
          variants={navbarVariant}
          initial="hidden"
          animate="visible"
        >
          <Link to="/" className="cursor-pointer">Codeguy</Link>
        </motion.h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <motion.ul
            className="flex justify-between gap-16 font-opensans text-md font-bold text-lg"
            variants={navbarVariant}
            initial="hidden"
            animate="visible"
          >
            <li>
              <a href="#/" className="hover:text-grey">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow">
                Contact
              </a>
            </li>
          </motion.ul>
        ) : (
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <img alt="menu-icon" src="./../assets/menu-icon.svg" />
          </button>
        )}
      </div>
      {/* MOBILE VIEW MODE */}
      {!isAboveSmallScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full bg-black w-[325px]">
          {/* Close Menu */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img alt="menu-icon" src="./../assets/close-icon.svg" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <ul className="flex flex-col gap-10 ml-[33%] text-lg text-white font-bold">
            <li>
              <a href="#home" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
