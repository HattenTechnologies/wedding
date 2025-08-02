import React, { useState, useEffect } from "react";

import { LiaGripLinesSolid } from "react-icons/lia";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsMobileMenuOpen(false);

    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      top: -100vh;
      left: 0;
      width: 100vw;
      height: 100vh;
      background:white;
      z-index: 9999;
      transition: top 0.6s ease-in-out;
    `;
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.top = "0";
    });

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      overlay.style.top = "100vh";
      setTimeout(() => {
        document.body.removeChild(overlay);
        setIsTransitioning(false);
      }, 600);
    }, 1000);
  };

  const navItems = [
    { label: "Home", id: "home", number: "01" },
    { label: "About", id: "about", number: "02" },
    { label: "Portfolio", id: "portfolio", number: "03" },
    { label: "Contact Us", id: "contact", number: "04" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-[2px] transition-all duration-500 font-anton ${
          scrolled ? "bg-white " : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span
                className={`text-[18px]  tracking-[0.2em] font-gvibes transition-colors duration-300 ${
                  scrolled ? "text-[#d4a373]" : " text-[#ffffff]"
                }`}
              >
                AstraClicks
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`group flex items-center space-x-2 transition-all duration-300  text-[#d4a373] hover:text-[#fce708]`}
                  disabled={isTransitioning}
                >
                  <span
                    className={`text-[15px]  tracking-[1px] font-moda opacity-80 group-hover:opacity-100 transition-opacity ${
                      scrolled ? "text-[#d4a373]" : " text-[#ffffff]"
                    }`}
                  >
                    {item.label}
                  </span>
                  <div className="w-0 h-[1px] bg-[#d4a373] group-hover:w-4 transition-all duration-300"></div>
                </button>
              ))}
            </div>

            {/* Mobile Icon Button */}
            <button
              className="md:hidden bg-transparent border-none cursor-pointer z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <TfiClose
                  className={`  text-xl transition-all duration-300 ${
                    scrolled ? "text-[#d4a373]" : "text-[#ffffff]"
                  }`}
                />
              ) : (
                <LiaGripLinesSolid
                  className={` text-2xl transition-all duration-300 ${
                    scrolled ? "text-[#d4a373]" : "text-[#d4a373]"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white backdrop-blur-md border-t border-white/90">
            <div className="px-6 py-6 space-y-6">
              <div className="text-left">
                <div className="text-[32px] font-playfair  mb-8  text-gray-500">
                  Navigation
                </div>
              </div>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className="w-full flex items-center justify-start bg-transparent border-none cursor-pointer  text-[#d4a373] hover:text-[#e1bc97] transition-colors duration-300 py-1"
                  disabled={isTransitioning}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl  font-playfair">{item.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
