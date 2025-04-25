import React from "react";
import Home from "../components/Home";
import Standards from "../components/Standards";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const MainLayOut = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="standards">
        <Standards />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default MainLayOut;
