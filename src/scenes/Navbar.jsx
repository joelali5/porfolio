import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Element = ({ page, selectedPage, setSelectedPage, setShowModal }) => {
  const lowercasePage = page.toLowerCase();
  return (
    <Link
      className={`${
        selectedPage === lowercasePage ? "text-light text-lg" : ""
      } hover:text-light text-lg transition duration-500`}
      href={`#${lowercasePage}`}
      onClick={() => setSelectedPage(lowercasePage)}
      to={page}
    >{page}</Link>
  );
};

export default function Navbar({ isTopOfPage, selectedPage, setSelectedPage }) {
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
  const navbarBackground = isTopOfPage ? "" : "bg-deep-blue";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6 mt-0 `}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <motion.h4
          className="font-playfair text-3xl font-bold text-light"
          variants={navbarVariant}
          initial="hidden"
          animate="visible"
        >
          <Link to="/Home">JAliyu</Link>
        </motion.h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <motion.div
            className="flex justify-between gap-16 font-opensans text-md font-bold text-lg "
            variants={navbarVariant}
            initial="hidden"
            animate="visible"
          >
            <Element
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Element
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Element
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Element
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </motion.div>
        ) : (
          <button
            className="rounded-full bg-light p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="./../assets/menu-icon.svg" />
          </button>
        )}
      </div>
      {/* MOBILE VIEW MODE */}
      {!isAboveSmallScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full bg-deep-blue w-[325px]">
          {/* Close Menu */}
          <div className="flex justify-end p-12">
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className="bg-light p-2 rounded-3xl"
            >
              <img alt="menu-icon" src="./../assets/close-icon.svg" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white font-bold">
            <Element
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Element
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Element
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Element
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
