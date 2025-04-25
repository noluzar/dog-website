import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed w-full bg-[#F6F1EC] p-6 sm:p-8 text-lg font-semibold z-50 flex items-center justify-between">
      <div className="hidden sm:flex space-x-10">
        {["home", "standards", "about", "testimonials", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => handleScrollToSection(section)}
            className={`relative transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#ff6726] after:transition-all after:duration-300 ${
              activeSection === section ? "after:w-full" : "hover:after:w-full"
            }`}
          >
            {section.toUpperCase()}
          </a>
        ))}
      </div>

      <div className="flex-1 flex justify-center">
        <p className="font-bowlby text-2xl sm:text-[35px]">FUR SEASÖNS</p>
      </div>

      <button className="sm:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
        <FiMenu />
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F6F1EC] p-4 flex flex-col space-y-4 sm:hidden shadow-md">
          {["home", "standards", "about", "testimonials", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => handleScrollToSection(section)}
              className={`block text-center py-2 ${
                activeSection === section ? "text-[#ff6726] font-bold" : "hover:text-[#ff6726]"
              }`}
            >
              {section.toUpperCase()}
            </a>
          ))}
        </div>
      )}

      <div className="hidden sm:flex">
        <button className="bg-[#ff6726] text-white px-4 py-2 rounded-full">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
