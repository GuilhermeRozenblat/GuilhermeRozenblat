// src/App.js
import React, { useEffect, useState } from "react";
import "./App.css";

import Topnavbar from "./components/navbar/Topnavbar";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Home from "./components/home/Home";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader"; 
import "@fortawesome/fontawesome-free/css/all.min.css";

import MouseTrail from "./components/MouseTrail/MouseTrail";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home"); 
  // ^ guardará qual section está em foco

  // Mapa de cores para cada section:
  const sectionColors = {
    home:    "#171717FF",
    uppes:   "#352C85FF",  
    systudio:"#613A8EFF",
    about:   "#A36B48FF",
    skills:  "#FFFFFFB4",
    contact: "#171717FF",
    footer:  "#FFFFFFFF",
  };
  
  

  useEffect(() => {
    // Oculta o loader após um breve período
    const timer = setTimeout(() => setIsLoading(false), 7200);
    return () => clearTimeout(timer);
  }, []);

  // Detectar qual <section> está aparecendo com IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section"); 
    // Pega todas as sections no DOM

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      {/* Exibe o Loader apenas enquanto isLoading for true */}
      {isLoading && <Loader />}

      {/* 
        Passar a cor da seção ativa para o MouseTrail como prop 
        Se não existir no mapa, usa uma cor padrão
      */}
      <MouseTrail
        color={
          isLoading
            ? "#FFFFFF" 
            : sectionColors[activeSection] || "#F09D6A"
        }
      />
      {/* Conteúdo da aplicação */}
      <div className={isLoading ? "hidden-content" : ""}>
        <Topnavbar />
        <Home />
        <Work />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
