import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowercasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectedPage === lowercasePage ? "text-red text-lg" : ""} hover:text-red text-lg transition duration-500`} href={`#${lowercasePage}`} onClick={() => setSelectedPage(lowercasePage)}>
            {page}
        </AnchorLink>
    );
};

export default function Navbar({ isTopOfPage, selectedPage, setSelectedPage}) {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 780px)");
    const navbarBackground = isTopOfPage ? "" : "bg-dark-grey";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold text-red">JJA</h4>

                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-md font-bold text-l">
                        <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                    ) : (
                    <button
                        className="rounded-full bg-red p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img alt="menu-icon" src="./../assets/menu-icon.svg"/>
                    </button>
                    )}
            </div>
            {/* MOBILE VIEW MODE */}
            {!isAboveSmallScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full bg-light w-[350px]">
                    {/* Close Menu */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)} className="bg-red p-2 rounded-3xl">
                            <img alt="menu-icon" src="./../assets/close-icon.svg"/>
                        </button>
                    </div>
                    {/* MENU ITEMS */}
                    <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white font-bold">
                        <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};