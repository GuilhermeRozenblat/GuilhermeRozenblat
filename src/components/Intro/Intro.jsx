import React from "react";
import "./Intro.css";
import { FaMobile, FaLaptop, FaMapPin, FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoIosPin } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa6";
import { IoDesktop } from "react-icons/io5";


function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-grid">

        <div className="linha1">
          
        </div>
        <h1 className="intro-name">I'm Guilherme Rozenblat.</h1>
        <IoPerson className="intro-icon search-icon" />

        <div className="intro-icons1">
          <FaUserGraduate className="intro-icon laptop-icon" />
          <IoIosPin className="intro-icon map-icon" />
        </div>
        <div className="intro-description">
          <h1>Computer Science Student based in Rio de Janeiro, Brazil.</h1>
        </div>

        <h1 className="intro-title">Full-Stack Web and Mobile Developer.</h1>
        <div className="intro-icons">
          <FaMobile className="intro-icon mobile-icon" />
          <IoDesktop className="intro-icon laptop-icon" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
