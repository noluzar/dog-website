import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f1e6db] text-lg font-semibold py-6">
      <div className="container mx-auto px-8 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <p className="font-bowlby text-[35px] text-[#ff6726]">FUR SEASÖNS</p>
        </div>
        <div className="space-x-10 mt-4 sm:mt-0 flex flex-wrap justify-center sm:justify-start">
          <a
            href="#home"
            className="relative transition-all duration-300 hover:text-[#ff6726] mx-2"
          >
            HOME
          </a>
          <a
            href="#standards"
            className="relative transition-all duration-300 hover:text-[#ff6726] mx-2"
          >
            STANDARDS
          </a>
          <a
            href="#about"
            className="relative transition-all duration-300 hover:text-[#ff6726] mx-2"
          >
            ABOUT
          </a>
          <a
            href="#testimonials"
            className="relative transition-all duration-300 hover:text-[#ff6726] mx-2"
          >
            TESTIMONIALS
          </a>
          <a
            href="#contact"
            className="relative transition-all duration-300 hover:text-[#ff6726] mx-2"
          >
            CONTACT
          </a>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm text-[#ff6726]">&copy; 2025 Fur Seasöns By Noluthando Ndlovu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
