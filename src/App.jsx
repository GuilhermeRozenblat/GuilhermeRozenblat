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
import Loader from "./components/Loader/Loader"; // Importa o componente Loader
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Oculta o loader após um breve período
    const timer = setTimeout(() => setIsLoading(false), 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Exibe o Loader apenas enquanto isLoading for true */}
      {isLoading && <Loader />}

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
