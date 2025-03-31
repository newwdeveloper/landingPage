import React from "react";
import heroImg from "../assets/modern-cnc-lathes-metalworking-industry.jpg";
import Navbar from "./Navbar";

import ContactForm from "./Form";
const HeroSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Navbar />
      <ContactForm />
    </div>
  );
};

export default HeroSection;
