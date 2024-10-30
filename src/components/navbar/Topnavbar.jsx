import React, { useState, useEffect } from "react";
import "./Topnavbar.css";
import GuiProfile from "../../assets/GuiProfilepic.png";
import setaLink from "../../assets/arrow.svg";
import { FaBars, FaTimes } from "react-icons/fa"; // Importação dos ícones para o menu móvel

const Topnavbar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Controle do menu móvel

  const handleScroll = () => {
    const sections = [
      { id: "#home", element: document.querySelector("#home") },
      { id: "#work", element: document.querySelector("#work") },
      { id: "#about", element: document.querySelector("#about") },
      { id: "#skills", element: document.querySelector("#skills") },
      { id: "#contact", element: document.querySelector("#contact") },
    ];

    

    if (currentSection && activeSection !== currentSection.id) {
      setActiveSection(currentSection.id);
      window.history.replaceState(null, null, currentSection.id);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleButtonClick = (section) => {
    const targetSection = document.querySelector(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Fechar o menu móvel após o clique
    window.history.replaceState(null, null, section);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="left">
          <div className="logonavbar">
            <button onClick={() => handleButtonClick("#home")}>
              <img src={GuiProfile} alt="Profile" />
              <div className="logo-name">
                <h1>Guilherme</h1>
                <h1><span className="top-nav-bar-sobrenome" translate="no">Rozenblat</span></h1>
              </div>
            </button>
          </div>
        </div>
        <div className="navbar-buttons">
          <button onClick={() => handleButtonClick("#work")}>Work</button>
          <span>&#10072;</span>
          <button onClick={() => handleButtonClick("#about")}>About</button>
          <span>&#10072;</span>
          <button onClick={() => handleButtonClick("#skills")}>Skills</button>
        </div>
        <div className="right">
          <div className="botaoGIT">
            <button onClick={() => handleButtonClick("#contact")}>
              <a href="#Contact">
                <div className="ring-container">
                  <div className="ringring"></div>
                  <div className="circle"></div>
                </div>
                <p>Contact</p>
                <img src={setaLink} alt="" />
              </a>
            </button>
          </div>
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-navbar">
          <button onClick={() => handleButtonClick("#work")}>Work</button>
          <button onClick={() => handleButtonClick("#about")}>About</button>
          <button onClick={() => handleButtonClick("#skills")}>Skills</button>
          <button onClick={() => handleButtonClick("#contact")}>Contact</button>
        </div>
      )}
    </div>
  );
};

export default Topnavbar;
