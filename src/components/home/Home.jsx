import { useEffect, useState } from "react";
import "./Home.css";
import video4new2 from "../../assets/video4new2.mp4";
import video4new2v3 from "../../assets/video4new2v3.mp4";

function Home() {
  const [videoSrc, setVideoSrc] = useState(video4new2); // Padrão para desktop

  useEffect(() => {
    // Detecta o tamanho da tela e ajusta a fonte de vídeo
    const selectVideoSource = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc(video4new2v3); // Versão de baixa resolução para mobile
      } else {
        setVideoSrc(video4new2); // Versão de alta resolução para desktop
      }
    };

    selectVideoSource(); // Configura o vídeo na carga inicial
    window.addEventListener("resize", selectVideoSource);

    return () => window.removeEventListener("resize", selectVideoSource);
  }, []);

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
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="background-video"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="content"></div>
      </div>
      <div className="content2">
        <div className="text1">
          <h1>Guilherme</h1>
          <h1>
            <span className="sobrenome" translate="no">
              Rozenblat
            </span>
          </h1>
          <h2 className="text2">Fullstack Developer</h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
