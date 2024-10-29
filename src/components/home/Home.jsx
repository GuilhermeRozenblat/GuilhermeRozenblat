import React, { useEffect } from "react";
import "./Home.css"; // Certifique-se de criar este arquivo CSS
import video4 from "../../assets/video4.mp4";

function Home() {
  useEffect(() => {
    // Define a altura do conteúdo para excluir a barra de navegação no mobile
    const setAppHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };

    // Define a altura ao carregar a página e ao redimensionar a tela
    setAppHeight();
    window.addEventListener("resize", setAppHeight);

    return () => window.removeEventListener("resize", setAppHeight);
  }, []);

  return (
    <section id="home" className="home">
      <video autoPlay loop muted className="background-video">
        <source src={video4} type="video/mp4" />
      </video>
     
      <div className="content"></div>
      <div className="content2">
        <div className="text1">
          <h1>Guilherme</h1>
          <h1>Rozenblat</h1>
          <h2 className="text2">Full-Stack Developer</h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
