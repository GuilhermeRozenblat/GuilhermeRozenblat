import React, { useEffect } from "react";
import "./Home.css";
import video4 from "../../assets/video4.mp4";

function Home() {
  useEffect(() => {
    // Ajusta a altura da aplicação para excluir a barra de navegação em dispositivos móveis
    const setAppHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };

    // Define a altura ao carregar a página e redimensionar a tela
    setAppHeight();
    window.addEventListener("resize", setAppHeight);

    return () => window.removeEventListener("resize", setAppHeight);
  }, []);

  return (
    <section id="home" className="home">
      <div className="main-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={video4} type="video/mp4" />
        </video>
        <div className="content"></div>
      </div>
      <div className="content2">
        <div className="text1">
          <h1>Guilherme</h1>
          <h1><span className="sobrenome" translate="no">Rozenblat</span></h1>
          <h2 className="text2">Full-Stack Developer</h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
